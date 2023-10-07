import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            name: name,
            age: age,
            gender: gender,
            message: message
        };

        try {
            // Replace 'YOUR_SERVER_ENDPOINT' with the actual endpoint URL where you'd like to send the POST request
            const response = await axios.post('/form', formData);
            console.log('Server Response:', response.data);

            // Clear the form
            setName('');
            setAge('');
            setGender('');
            setMessage('');
        } catch (error) {
            console.error('There was an error submitting the form:', error);
        }
    };

    const handleCancel = () => {
        // Clear the form
        setName('');
        setAge('');
        setGender('');
        setMessage('');
    };

    return (
        <div>
            <h2>Submit Penpal Info</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Age:</label>
                    <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div>
                    <label>Gender:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div>
                    <label>Message:</label>
                    <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
