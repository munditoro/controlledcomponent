import React from 'react';
import '../styles/style.css';

const TextArea = props => {
    let formControl = "form-control";
    const { touched, valid, name, placeholder, onChange, value } = props;

    if (touched && !valid) {
        formControl = "form-control control-error";
    }

    return(
        <div className={formControl}>
            <textarea name={name} placeholder={placeholder} onChange={onChange} value={value} className={formControl} />
         </div>
    )
}

export default TextArea;