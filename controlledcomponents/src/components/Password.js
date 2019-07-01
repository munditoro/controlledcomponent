import React from 'react';
import '../styles/style.css';

const Password = props => {
    let formControl = "form-control";
    const { touched, valid, name, placeholder, onChange, value } = props;

    if (touched && !valid) {
        formControl = "form-control control-error";
    }

    return(
        <div className="form-control">
            <input type="password" className={formControl} name={name} placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    )
}

export default Password;