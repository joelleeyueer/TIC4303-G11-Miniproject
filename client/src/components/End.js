import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function End() {

    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/form');
    };

    const handleLogOut = async () => {
        try {
            const response = await axios.post('/logout');

            // Log the server's response
            console.log(response.data);

            // You can also redirect or update the UI based on the server's response here

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