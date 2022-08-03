import React, { useRef, useState, useEffect } from "react";
import Boxes from '@material-ui/core/Box';
import axios from '../auth/axios';
import { useNavigate, useLocation } from 'react-router-dom';

const EMP_REGEX = /^[0-9][a-zA-Z0-9]{4,9}$/;
// const PWD_REGEX =/^(?=.*[a-z])(?=*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).(3,24)$/;
const PWD_REGEX =/^(?=.*?[0-9]).{4,24}$/;

const SIGNUP_URL = '/api/users/register';

const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const [empID, setEmpID] = useState('');
    const [validEmpId, setValidEmpId] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        const result = EMP_REGEX.test(empID);
        setValidEmpId(result);
    }, [empID])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        setValidPwd(result);
        const isMatch = (pwd === matchPwd);
        setValidMatch(isMatch); 
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [empID, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        const v1 = EMP_REGEX.test(empID);
        const v2 = PWD_REGEX.test(pwd);

        if(!v1 || !v2) {
            setErrMsg("Invalid Employee ID or Password.");
            return;
        }
        
        try {
            const response = await axios.post(SIGNUP_URL, 
                JSON.stringify({empID: empID, password: pwd}), 
                {
                    headers: { 'Content-Type' : 'application/json'},
                    // withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));

            setEmpID('');
            setPwd('');
            setMatchPwd('');

            navigate(from, { replace: true });

        } catch (error) {
            // console.log(error?.response?.data);
            if(!error?.response) {
                setErrMsg('No Server Response.');
            } else if(error.response?.status === 400) {
                setErrMsg("User already exists.");
            } else if(error.response?.status === 406) {
                setErrMsg("Employee not Found.");
            } else {
                setErrMsg("Unauthorized.");
            }
            errRef.current.focus();
        }
    }

    const goToLogin = async (e) => {
        e.preventDefault();
        navigate(from, { replace: true });
    }

    return(

        <div className='login-container'>
        <Boxes className='login-box'>
        <h3>Register</h3><br></br>

        <p ref={errRef} className={errMsg ? "errMsg" : "offScreen"} aria-live="assertive">{errMsg}</p>

        <form onSubmit={handleSubmit}>
            <input
                className="input"
                type= 'text'
                id='empId'
                ref={userRef}
                placeholder= 'Employee ID'
                autoComplete="off"
                onChange={(e) => setEmpID(e.target.value)}
                value = {empID}
                required
                aria-describedby="uidNote" 
                aria-invalid = {validEmpId ? "false" : "true"} 
                onFocus = {() => setUserFocus(true)} 
                onBlur = {() => setUserFocus(false)}
            />
            <p id="uidNote" className={userFocus && empID && !validEmpId ? "instructions" : "offScreen"}>
                4 to 10 characters.<br />
                Must begin with a number.<br />
                Letters, Numbers are allowed.
            </p>

            <input
                className="input"
                type= 'password'
                id='password'
                placeholder= 'Password'
                onChange={(e) => setPwd(e.target.value)}
                value = {pwd}
                required
                aria-invalid = {validPwd ? "false" : "true"} 
                aria-describedby="pwdNote" 
                onFocus = {() => setPwdFocus(true)} 
                onBlur = {() => setPwdFocus(false)}
            />
            <p id="pwdNote" className={pwdFocus && pwd && !validPwd ? "instructions" : "offScreen"}>
                4 to 25 characters.<br />
                Must include a number.<br />
                Allowed special characters.
            </p>

            <input
                className="input"
                type= 'password'
                id='confirm_pwd'
                placeholder= 'Confirm Password'
                onChange={(e) => setMatchPwd(e.target.value)}
                value = {matchPwd}
                required
                aria-invalid = {validMatch ? "false" : "true"} 
                aria-describedby="matchPwdNote" 
                onFocus = {() => setMatchFocus(true)} 
                onBlur = {() => setMatchFocus(false)}
            />
            <p id="matchPwdNote" className={matchFocus && !validMatch ? "instructions" : "offScreen"}>
                Must match the first password input field.
            </p>

            <div className='login-button-container'>
                <button className='btn' type='button' onClick={goToLogin}>Go Back</button>
                <button className='btn' type='submit' disabled={!validEmpId || !validPwd || !validMatch ? true : false}> Sign Up</button>
            </div>
        </form>
        </Boxes>
        </div>
    );

}

export default SignUp;