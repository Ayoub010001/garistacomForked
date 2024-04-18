// 1. Create a LoginContext.js file for your context
import React, { createContext, useState, useContext } from 'react';
import { APIURL } from '../../lib/ApiKey';
import axios from 'axios';
import { axiosInstance } from '../../axiosInstance';
import { useNavigate } from 'react-router-dom';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const navigate = useNavigate();

  const login = async (email, password, navigate) => {
    try {
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content'); // Fetch CSRF token from meta tag
      const response = await axiosInstance.post(`${APIURL}/api/auth/login`, {
        login: email,
        password,
      }, {
        headers: {
          'X-CSRF-TOKEN': csrfToken // Include CSRF token in the request headers
        }
      });
  
      if (response.status === 200) {
        setIsLoggedIn(true);
        console.log("The Response => ", response.data.user);
        localStorage.setItem('userGarista', JSON.stringify(response.data.user));
        navigate("/Dashboard");
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setIsLoggedIn(false);
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    // You might also want to clear any stored tokens or user data
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
