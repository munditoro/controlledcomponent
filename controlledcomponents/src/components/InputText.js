import React from 'react';
import '../styles/style.css';

const TextInput = props => {
    let formControl = "form-control";
    const { touched, valid, name, placeholder, onChange, value } = props;

    if (touched && !valid) {
        formControl = "form-control control-error";
    }
    return(
        <div className="form-group">
            {/**  Usamos ...props para distribuir las props que vienen del parte en nuestro componente */}
            <input type="text" className={formControl} name={name} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    )
}

export default TextInput;

