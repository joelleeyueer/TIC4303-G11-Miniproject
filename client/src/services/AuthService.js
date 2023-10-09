import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('authToken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});


class AuthService {
  login(user) {
    return axios.post('http://localhost:8080/auth/login', user)
      .then(response => {
        localStorage.setItem('authToken', response.data);
      });
  }

  isLoggedIn() {
    return localStorage.getItem('authToken') !== null;
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  async logout() {
        try {
            await axios.post('http://localhost:8080/auth/logout');
            window.alert("Logout successful!");
            localStorage.removeItem('authToken');
            delete axios.defaults.headers.common['Authorization'];
        } catch (error) {
            console.error("There was an error logging out from the server:", error);
            if (error.response && error.response.status === 400) {
                window.alert("Logout unsuccessful, please try again.");
            }
        }
    }
}

const authServiceInstance = new AuthService();

export default authServiceInstance;
