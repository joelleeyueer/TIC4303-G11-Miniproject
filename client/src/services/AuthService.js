import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem('authToken');

        // Check if the current path is not the root path
        if (window.location.pathname !== '/') {
            if (!token) {
                const navigate = useNavigate();
                navigate('/');
                alert('You are not logged in or session has timed out. Please log in again.');
            } else {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

class AuthService {
    
    login(user) {
        return axios.post('http://localhost:8080/auth/login', user)
        .then(response => {
            localStorage.setItem('authToken', response.data);
        });
    }

    isLoggedIn() {
        return localStorage.getItem('authToken') && localStorage.getItem('authToken') !== '';
    }


    getToken() {
        return localStorage.getItem('authToken');
    }

    validateToken() {
        return axios.post('http://localhost:8080/auth/validate-token')
        .then(response => {
            return response.status === 200;
        }).catch(error => {
            return false;
        });
    }
    

    async logout(navigate) {
        try {
            await axios.post('http://localhost:8080/auth/logout');
        } finally {
            window.alert("You have been logged out.");
            localStorage.removeItem('authToken');
            delete axios.defaults.headers.common['Authorization'];
            if (navigate) {
                navigate('/');
            }
        }
    }
}

const authServiceInstance = new AuthService();

export default authServiceInstance;
