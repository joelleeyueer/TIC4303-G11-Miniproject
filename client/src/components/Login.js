import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


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
            // Make a POST request to your server's /login endpoint
            const response = await axios.post('http://localhost:8080/auth/login', loginData);

            // Log the server's response
            console.log(response.data);

            // You can also redirect or update the UI based on the server's response here
            if (response.status === 200) {
                navigate("/form");
            }

        } catch (error) {
            console.error("There was an error with the POST request:", error);
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
