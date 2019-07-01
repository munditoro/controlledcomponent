import React, { Component } from 'react';
import TextInput from './InputText';
import TextArea from './TextArea';
import Email from './Email';
import Radio from './Radio';
import Select from './Select';
import validate from './validate';

class FormComponent extends Component{
    constructor(){
        super()
        this.state = {
            formIsValid: false,

            formControls: {
                name: {
                    value: '',
                    placeholder: '¿Cuál es tu nombre?',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true
                    }
                },
                my_email: {
                    value: '',
                    placeholder: 'Introduce tu email',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true,
                        isEmail: true
                    }
                },
                address: {
                    value: '',
                    placeholder: 'Introduce tu domicilio',
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true
                    }
                },
                gender: {
                    value: '',
                    placeholder: '¿Cuál es tu género?',
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: true
                    },
                    options: [
                        {value: 'h', displayValue: 'Hombre'},
                        {value: 'm', displayValue: 'Mujer'}
                    ]
                },
                my_radio: {
                    value: '',
                    placeholder: '¿Eres desarrollador FrontEnd?',
                    valid: false,
                    touched: false,
                    validationRules: {

                    },
                    options: [
                        {value:0, displayValue: 'No'},
                        {value:1, displayValue: 'Sí'}
                    ]
                }
            }
        }
    }

    changeHandler = event => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };

        const updatedFormElement = {
            ...updatedControls[name]
        }

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedControls){
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls,
            formIsValid: formIsValid
        });

    }

    formSubmitHandler = () => {
        const formData = {};
        for(let formElementId in this.state.formControls){
            formData[formElementId] = this.state.formControls[formElementId].value;
        }

        console.dir(formData);
    }

    render() {
        return (
            <div>
                <TextInput name="name"
                            placeholder={this.state.formControls.name.placeholder}
                            value={this.state.formControls.name.value}
                            onChange={this.changeHandler} 
                            touched={this.state.formControls.name.touched}
                            valid={this.state.formControls.name.valid}
                />

                <TextArea name="address"
                    placeholder={this.state.formControls.address.placeholder}
                    value={this.state.formControls.address.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.address.touched}
                    valid={this.state.formControls.address.valid}
                />

                <Email name="my_email"
                        placeholder={this.state.formControls.my_email.placeholder}
                        value={this.state.formControls.my_email.value}
                        onChange={this.changeHandler}
                        touched={this.state.formControls.my_email.touched}
                        valid={this.state.formControls.my_email.valid}
                />

                <Select name="gender"
                        value={this.state.formControls.gender.value}
                        onChange={this.changeHandler}
                        options={this.state.formControls.gender.options}
                        touched={this.state.formControls.gender.touched}
                        valid={this.state.formControls.gender.valid}
                />

                <Radio name="my_radio"
                    value={this.state.formControls.my_radio.value}
                    onChange={this.changeHandler}
                    options={this.state.formControls.my_radio.options}
                    touched={this.state.formControls.my_radio.touched}
                    valid={this.state.formControls.my_radio.valid}
                />

                <button onClick={this.formSubmitHandler} 
                        disabled={!this.state.formIsValid}> Enviar </button>
            </div>
        );
    }
}

export default FormComponent;