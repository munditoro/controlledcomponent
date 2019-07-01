import React from 'react';
import '../styles/style.css';

const Radio = props => {
    let formControl = "form-control";
    const { touched, valid, name, onChange, options } = props;

    if (touched && !valid) {
        formControl = "form-control control-error";
    }

    return(
        <div className="form-group">
            {options.map(option => (
                <div className="form-group" key={option.value}>
                    <label>{option.displayValue}</label>
                    <input type="radio"
                            name={name}
                            value={option.value}
                            onChange={onChange}
                            className={formControl}
                    />
                </div>
            ))}
        </div>
    )
}

export default Radio;