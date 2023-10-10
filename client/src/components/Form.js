import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/AuthService';

function Form() {

    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');
    const [qualification, setQualification] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            const isValid = await AuthService.validateToken();
            if (!isValid) {
                navigate('/');
                setTimeout(() => {
                    alert('You are not logged in or session has timed out. Please log in again.');
                }, 100);
            }
        };
        checkToken();
    }, []);
    

    const validateInput = () => {
        const nameRegex = /^[a-zA-Z]{2,}$/;
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const phoneRegex = /^\d+$/;
        const countryRegex = /^[a-zA-Z]/;

        if (!nameRegex.test(name)) {
            alert("Name must be at least 2 characters.");
            return false;
        }
        if (!emailRegex.test(emailAddress)) {
            alert("Enter a valid email.");
            return false;
        }

        if (!phoneRegex.test(phoneNumber) || phoneNumber.length < 1) {
            alert("Phone number must be at least 1 digit.");
            return false;
        }

        if (!countryRegex.test(country)) {
            alert("Please input a valid country.");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateInput()) return;

        const formData = {
            name: name,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            country: country,
            gender: gender,
            qualification: qualification
        };

        try {
            const response = await axios.post('http://localhost:8080/form', formData);

            setName('');
            setEmailAddress('');
            setPhoneNumber('');
            setCountry('');
            setGender('');
            setQualification('');

            if (response.status === 200) {
                window.alert("Form submitted successfully!");
                navigate("/end");
            }

        } catch (error) {
            console.error('There was an error submitting the form:', error);
            if (error.response && error.response.status === 403) {
                alert('Form not submitted due to authorization error. Logging out...');
                handleLogOut();
            }
        }
    };

    const handleReset = () => {
        setName('');
        setEmailAddress('');
        setPhoneNumber('');
        setCountry('');
        setGender('');
        setQualification('');
    };

    const handleLogOut = async () => {

        try {
            await AuthService.logout(navigate);
            navigate("/");
        } catch (error) {
            console.error("There was an error with the GET request:", error);
        }
    };

    return (
        <div className="container">
            <div className="form-container">
                <h2>Submit Info</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label>Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-field">
                    <label>Email Address:</label>
                    <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label>Phone Number:</label>
                        <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label>Country:</label>
                        <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="form-field">
                        <label>Gender:</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                            <option value="">Select...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <label>Qualification:</label>
                        <select value={qualification} onChange={(e) => setQualification(e.target.value)}>
                            <option value="">Select...</option>
                            <option value="GCE 'O' Level/'N' level">GCE 'O' Level/'N' level</option>
                            <option value="Higher Nitec/Nitec">Higher Nitec/Nitec</option>
                            <option value="Polytechnic Diploma">Polytechnic Diploma</option>
                            <option value="Bachelor's Degree">Bachelor's Degree</option>
                            <option value="Master's Degree">Master's Degree</option>
                            <option value="Doctorate (Ph.D.)">Doctorate (Ph.D.)</option>
                        </select>
                    </div>

                    <br></br>
                    <div className='button-group'>
                        <div className="form-button-group">
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                            <button type="button" className="logout" onClick={handleLogOut}>Logout</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
    
}

export default Form;
