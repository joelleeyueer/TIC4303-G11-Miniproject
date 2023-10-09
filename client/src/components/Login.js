import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Username:", username);
        console.log("Password:", password);

        const loginData = {
            username: username,
            password: password
        };

        try {
            await AuthService.login(loginData);

            if (AuthService.isLoggedIn()) {
                navigate("/form");
            }

        } catch (error) {
            console.error("There was an error with the POST request:", error);
            if (error.response && error.response.status === 401) {
                window.alert("Username or password is incorrect!");
            }
        }
    }

    return (
        <div className="container">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-field">
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <br></br>
                    <div className='button-group'>
                        <div className="login-button-group">
                            <button type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
    
}

export default Login;
