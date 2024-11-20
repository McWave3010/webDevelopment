import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Spinner from '../Messages/Spinner';
import axios from 'axios';



type ProtectRouteProps = {
        children: any;
    }
const ProtectedRoute:React.FunctionComponent<ProtectRouteProps> = ({ children } ) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

    
//Auth checking process stagge
    useEffect(() => {
        const checkAuth = async ():Promise<void> => {
            try {
                const url : string= 'http://localhost:4000/app/protected';
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include', // Send cookies with request
                });
                const result = await response.json();
                if (result) {   
                    setIsAuthenticated(result.ok);
                }else{
                    setIsAuthenticated(false);
                }
               
        }
            catch (error) {
                setIsAuthenticated(false);
            }
        
        
    }
    checkAuth();
});

    if (isAuthenticated === null) return <Spinner/>; // Optionally add a loading spinner

    return isAuthenticated ? <>{children}</> : <Navigate to="/user/login" />;
};

export default ProtectedRoute;
