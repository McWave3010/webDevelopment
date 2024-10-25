import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../Messages/Spinner';


type ProtectRouteProps = {
        children: any;
    }
const ProtectedRoute:React.FunctionComponent<ProtectRouteProps> = ({ children } ) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch('http://localhost:8080/protected-route', {
                    method: 'GET',
                    credentials: 'include', // Send cookies with request
                });
                if (response.ok) {
                    setIsAuthenticated(true);
                    console.log(response.json());
                } else {
                    setIsAuthenticated(false);
                }
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);

    if (isAuthenticated === null) return <Spinner/>; // Optionally add a loading spinner

    return isAuthenticated ? <>{children}</> : <Navigate to="/user/login" />;
};

export default ProtectedRoute;
