import React from 'react';
import '../styles/style.css';

const Email = props => {
    let formControl = "form-control";
    const { touched, valid, name, placeholder, onChange, value } = props;

    if (touched && !valid) {
        formControl = "form-control control-error";
    }

    return(
        <div className="form-group">
            <input type="email" className={formControl} name={name} placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    )
}

export default Email;