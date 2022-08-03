import React, { useRef, useState, useEffect } from 'react';
import useAuth from '../auth/UseAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import Boxes from '@material-ui/core/Box';
import axios from '../auth/axios';

const LOGIN_URL = '/api/users/login';

const Login = () => {

    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/Home";
    const signUpForm = location.state?.signUpForm?.pathname || "/SignUp";

    const userRef = useRef();
    const errRef = useRef();
    
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({empID: user, password: pwd}), 
                {
                    headers: { 'Content-Type' : 'application/json'},
                    // withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));

            const accessToken = response?.data?.token;
            const admin = response?.data?.admin.data[0];

            console.log(admin);

            setAuth({ user, pwd, accessToken });

            setUser('');
            setPwd('');
            // setSuccess(true);
            navigate(from, { replace: true });

        } catch (error) {

            if(!error?.response) {
                setErrMsg('No Server Response.');
            } else if(error.response?.status === 400) {
                setErrMsg("Invalid username or password.");
            } else if(error.response?.status === 401) {
                setErrMsg("Unauthorized.");
            } else {
                setErrMsg("Login Failed.");
            }
            errRef.current.focus();
        }
    }

    const goToSingUp = async (e) => {
        e.preventDefault();
        navigate(signUpForm, { replace: true });
    }

    return (
            <div className='login-container'>
            <Boxes className='login-box'>
            <h3>Login to your account</h3><br></br>

            <p ref={errRef} className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">{errMsg}</p>

            <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type= 'text'
                    id='username'
                    ref={userRef}
                    placeholder= 'Employee ID'
                    onChange={(e) => setUser(e.target.value)}
                    value = {user}
                    required
                />

                <input
                    className="input"
                    type= 'password'
                    id='password'
                    placeholder= 'Password'
                    onChange={(e) => setPwd(e.target.value)}
                    value = {pwd}
                    required
                />

                <div className='login-button-container'>
                    <button className='btn' type='button' onClick={goToSingUp}>Sign Up</button>
                    <button className='btn' type='submit'>Login</button>
                </div>
            </form>
            </Boxes>
        </div>
    )
}

export default Login;