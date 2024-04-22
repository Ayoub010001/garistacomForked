// 1. Create a LoginContext.js file for your context
import React, { createContext, useState, useContext } from 'react';
import { APIURL } from '../../lib/ApiKey';
import axios from 'axios';
import { axiosInstance } from '../../axiosInstance';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginContext = createContext();

export const useLogin = () => useContext(LoginContext);

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [userData, setUserData] = useState([]);
  const [isStill, setIsStille] = useState('non');
  // const navigate = useNavigate();
  useEffect(() => {

      console.log("userData => ", userData.length);
      setIsStille("yes")
      }, [isStill]);
  
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
        getUser(response.data.user.id)
        setUserData(response.data.user)
        navigate("/Dashboard");
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMsg("Email or password are incorrect")
      setIsLoggedIn(false);
    }
  };
  const getUser = async (id) => {
    try {
      const response = await axiosInstance.get(`${APIURL}/api/users/${id}`);
  
      if (response.status === 200) {
        console.log("The Response of User => ", response.data.user);
        console.log("The User Data Id => ",userData);
      }
      return response.data;
    } catch (error) {
      console.error('Error User:', error);
    }
  }
  const logout =async (navigate) => {
    try {
      const response = await axiosInstance.post(`${APIURL}/api/auth/logout`);
  
      if (response.status === 200) {
        console.log("The Response of Logout => ", response.data);
        navigate('/Login')
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, ErrorMsg, getUser, isStill }}>
      {children}
    </LoginContext.Provider>
  );
};
