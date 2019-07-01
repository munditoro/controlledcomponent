import React from 'react';
import '../styles/style.css';

const Select = props => {
    let formControl = "form-control";
    const { touched, valid, name, placeholder, onChange, value, options } = props;

    if (touched && !valid) {
        formControl = "form-control control-error";
    }

    return(
        <div className="form-group">
            <select className={formControl} value={value} onChange={onChange} name={name}>
                <option value={0}> {placeholder} </option>
                {options.map(option => (
                    <option value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select;