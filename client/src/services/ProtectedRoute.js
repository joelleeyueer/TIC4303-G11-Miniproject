import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './AuthService';

const ProtectedRoute = ({ element, ...rest }) => {
    let navigate = useNavigate();

    useEffect(() => {
        if (!AuthService.isLoggedIn()) {
            navigate('/'); // Using the navigate function within useEffect
            setTimeout(() => {
                alert('You are not logged in. Redirecting to login page.');
            }, 100);
        }
    }, [navigate]); // Depend on the navigate function to avoid redundant triggers

    if (!AuthService.isLoggedIn()) {
        return null; // Render nothing for this route until useEffect runs
    }
    
    return element; // Render the protected route's element
};

export default ProtectedRoute;
