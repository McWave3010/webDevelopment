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
        console.log("Auth system rendered");
        const checkAuth = async ():Promise<void> => {
            try {
                const url : string= 'http://localhost:8080/protected-route';
                const response = await fetch(url, {
                    method: 'GET',
                    credentials: 'include', // Send cookies with request
                });
                if (response.ok) {
                    setIsAuthenticated(true);
                
                } else if(!response) {
                    const responses = await axios.get('http://localhost:8080/google/provider', { withCredentials: true });
                    if (responses.status === 200) {
                        setIsAuthenticated(responses.data.authenticated);
                    }else{
                        setIsAuthenticated(responses.data.authenticated);
                    } 
                    
                }else{
                     await axios.get("/github/provider" , { withCredentials: true })
                    .then(responsed =>{
                        if (responsed){
                            setIsAuthenticated(responsed.data.authenticated)
                        }else{
                            setIsAuthenticated(false)
                        }
                        
                    })
                }
            } catch (error) {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, [isAuthenticated]);

    if (isAuthenticated === null) return <Spinner/>; // Optionally add a loading spinner

    return isAuthenticated ? <>{children}</> : <Navigate to="/user/login" />;
};

export default ProtectedRoute;
