import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

function End() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/form');
    };

    const handleLogOut = async () => {
        try {
            await AuthService.logout();
            navigate("/");
        } catch (error) {
            console.error("There was an error with the GET request:", error);
        }
    };

    return (
        <div className="container">
            <img src="/thank-you.jpg" alt="Thank You" />
            <br></br>
            <div className='button-group'>  
                <div className="end-button-group">
                    <button onClick={handleBack}>Submit Another Form</button>
                    <button className="logout" onClick={handleLogOut}>Log Out</button>
                </div>  
            </div>
        </div>
        
    );
}

export default End;