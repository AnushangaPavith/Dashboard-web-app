import { Container } from '@material-ui/core';
import React, { useRef, useState, useEffect, useContext } from 'react';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';
import AuthContext from '../config/AuthProvider';

import axios from '../config/axios';
const LOGIN_URL = 'http://localhost:3001/api/users/login';

class Loginform extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            empID:'',
            password:'',
            buttonDisabled: false
        }
    }

    setInputValue(property,val){
        val.val.trim();
        if (val.length>12){
            return;
        }
        this.setState({
            [property] : val
        })
    }

    resetForm(){
        this.setState({
            empID : '',
            password : '',
            buttonDisabled : false
        })
    }

    render(){
        return (
            <div className="login-container">
                <h3>Login to your account</h3><br></br>
                <InputField
                    type='text'
                    placeholder='Employee ID'
                    /*value={this.state.empID ? this.state.empID : ''}
                    onChange={(val) => this.setInputValue('empID',val)}*/
                />

                <InputField
                    type='password'
                    placeholder='Password'
                    /*value={this.state.empID ? this.state.empID : ''}
                    onChange={(val) => this.setInputValue('empID',val)}*/
                />

                <SubmitButton
                    text = 'Login'
                    disabled = {this.state.buttonDisabled}
                />
            </div>
        )
    }
}

// export default Loginform;

const Login = () => {

    const { setAuth } = useContext(AuthContext);

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
            // const response = await axios.post(LOGIN_URL, 
            //     JSON.stringify({empID: user, password: pwd})
            // );

            // console.log(JSON.stringify(response?.data));

            let result = await fetch(LOGIN_URL, {
                method: 'post',
                body: JSON.stringify({
                empID: user, password: pwd
            })
        });
            
            setUser('');
            setPwd('');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='login-container'>            
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
                    // value = {pwd}
                    required
                />

                <button className='btn'>
                    Login
                </button> 
            </form>          

        </div>
    )
}

export default Login;