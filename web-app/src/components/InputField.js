import React from "react";

class InputField extends React.Component{
    render(){
        return(
            <div className="inputField">
                <input
                    className="input"
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChange={(e)=>this.props.onChange(e.target.value)}
                    readOnly={this.props.readOnly}
                />
            </div>
        );
    }
}

export default InputField;