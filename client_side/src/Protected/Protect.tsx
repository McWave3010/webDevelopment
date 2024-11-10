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
                const url : string= 'https://backendservice.vercel.app/protected-route';
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include', // Send cookies with request
                });
                if (response.ok) {   
                    setIsAuthenticated(true);
                } 
                else{
                    setIsAuthenticated(false);
                    const responses = await axios.get('https://backendservice.vercel.app/google/provider', { withCredentials: true });
                    if (responses.status === 200) {
                        setIsAuthenticated(true);
                    }else{
                        setIsAuthenticated(false);
                        await axios.get("https://backendservice.vercel.app/github/provider" , { withCredentials: true })
                    .then(responsed =>{
                        if (responsed){
                            setIsAuthenticated(true)
                        }else{
                            setIsAuthenticated(false)
                        }
                    })
                }
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
