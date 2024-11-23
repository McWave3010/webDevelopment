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

        // If main auth fails, check Google provider
        console.log("Main auth failed, trying Google provider");
        const googleResponse = await axios.get('http://localhost:8080/google/provider', { withCredentials: true });
        if (googleResponse.status === 200) {
          console.log("Authenticated with Google provider");
          setIsAuthenticated(true);
          return;
        }

        // If Google auth fails, check GitHub provider
        console.log("Google auth failed, trying GitHub provider");
        const githubResponse = await axios.get('http://localhost:8080/github/provider', { withCredentials: true });
        if (githubResponse.status === 200) {
          console.log("Authenticated with GitHub provider");
          setIsAuthenticated(true);
          return;
        }

        // If all checks fail, set to not authenticated
        setIsAuthenticated(false);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []); // Empty dependency array ensures this only runs on mount

  // Display loading spinner while authentication is being checked
  if (isAuthenticated === null) return <Spinner />;

  // Redirect to login page if not authenticated
  return isAuthenticated ? <>{children}</> : <Navigate to="/user/login" />;
};

export default ProtectedRoute;
