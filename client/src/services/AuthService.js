import axios from 'axios';

class AuthService {
  login(user) {
    return axios.post('http://localhost:8080/auth/login', user)
      .then(response => {
        localStorage.setItem('authToken', response.data);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
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
            localStorage.removeItem('authToken');
            delete axios.defaults.headers.common['Authorization'];
        } catch (error) {
            console.error("There was an error logging out from the server:", error);
        }
    }
}

const authServiceInstance = new AuthService();

export default authServiceInstance;
