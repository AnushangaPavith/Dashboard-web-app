import React from 'react';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';

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

export default Loginform;