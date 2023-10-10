import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './AuthService';

const ProtectedRoute = ({ element, ...rest }) => {
    let navigate = useNavigate();

    useEffect(() => {
        if (!AuthService.isLoggedIn()) {
            navigate('/');
            setTimeout(() => {
                alert('You are not logged in. Redirecting to login page.');
            }, 100);
        }
    }, [navigate]);

    if (!AuthService.isLoggedIn()) {
        return null;
    }
    
    return element;
};

export default ProtectedRoute;
