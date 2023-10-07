import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Form() {
    const [name, setName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [country, setCountry] = useState('');
    const [gender, setGender] = useState('');
    const [qualification, setQualification] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: name,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            country: country,
            gender: gender,
            qualification: qualification
        };

        try {
            // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint URL where you'd like to send the POST request
            const response = await axios.post('/form', formData);
            console.log('Server Response:', response.data);

            // Clear the form
            setName('');
            setEmailAddress('');
            setPhoneNumber('');
            setCountry('');
            setGender('');
            setQualification('');

        } catch (error) {
            console.error('There was an error submitting the form:', error);
        }
    };

    const handleReset = () => {
        // Clear the form
        setName('');
        setEmailAddress('');
        setPhoneNumber('');
        setCountry('');
        setGender('');
        setQualification('');
    };

    const handleCancel = () => {
        // Clear the form
        setName('');
        setEmailAddress('');
        setPhoneNumber('');
        setCountry('');
        setGender('');
        setQualification('');
        navigate('/');

    };

    // return (
    //     <div>
    //         <h2>Submit Info</h2>
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label>Name:</label>
    //                 <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    //             </div>
    //             <div>
    //                 <label>Email Address:</label>
    //                 <input type="text" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
    //             </div>
    //             <div>
    //                 <label>Phone Number:</label>
    //                 <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    //             </div>
    //             <div>
    //                 <label>Country:</label>
    //                 <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} />
    //             </div>
    //             <div>
    //                 <label>Gender:</label>
    //                 <select value={gender} onChange={(e) => setGender(e.target.value)}>
    //                     <option value="">Select...</option>
    //                     <option value="male">Male</option>
    //                     <option value="female">Female</option>
    //                     <option value="other">Other</option>
    //                 </select>
    //             </div>
    //             <div>
    //                 <label>Qualification:</label>
    //                 <textarea value={qualification} onChange={(e) => setQualification(e.target.value)}></textarea>
    //             </div>
    //             <div>
    //                 <button type="submit">Submit</button>
    //                 <button type="button" onClick={handleReset}>Reset</button>
    //                 <button type="button" onClick={handleCancel}>Logout</button>
    //             </div>
    //         </form>
    //     </div>
    // );

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
                        <input type="text" value={qualification} onChange={(e) => setQualification(e.target.value)} />
                    </div>
                    <br></br>
                    <div className='button-group'>
                        <div className="form-button-group">
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                            <button type="button" onClick={handleCancel}>Logout</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
    
}

export default Form;
