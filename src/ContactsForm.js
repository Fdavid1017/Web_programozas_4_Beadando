import React from 'react';
import WorkExperience from "./WorkXPForm";
import ReactDOM from "react-dom";
import Contact from "./Contact";
import {connect} from 'react-redux'
import {Field, reduxForm, formValueSelector, getFormValues} from 'redux-form'

class ContactsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            phone: '',
            email: '',
            address: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        //   alert('Name: ' + this.state.name + "\nTel: " + this.state.phone + "\nEmail: " + this.state.email + "\nAddress: " + this.state.address);
        /*   const name = React.createContext('name');
           const phone = React.createContext('phone');
           const email = React.createContext('email');
           const address = React.createContext('address');
           this.context.name = this.state.name;
           this.context.phone = this.state.phone;
           this.context.email = this.state.email;
           this.context.address = this.state.address;*/

        event.preventDefault();
        next(event);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} name={"contacts"}>
                <div className="input_field">
                    <label htmlFor={"nameInputField"}>Name:</label><input name={"name"} type={"text"}
                                                                          id={"nameInputField"}
                                                                          value={this.state.value}
                                                                          onChange={this.handleInputChange}/>
                </div>
                <div className="input_field">
                    <label htmlFor={"telInputField"}>Phone:</label><input name={"phone"} type={"tel"}
                                                                          id={"telInputField"}
                                                                          value={this.state.value}
                                                                          onChange={this.handleInputChange}/>
                </div>
                <div className="input_field">
                    <label htmlFor={"emailInputField"}>E-mail:</label><input name={"email"} type={"email"}
                                                                             id={"emailInputField"}
                                                                             value={this.state.value}
                                                                             onChange={this.handleInputChange}/>
                </div>
                <div className="input_field">
                    <label htmlFor={"addressInputField"}>Address:</label><input name={"address"} type={"text"}
                                                                                id={"addressInputField"}
                                                                                value={this.state.value}
                                                                                onChange={this.handleInputChange}/>
                </div>
                <button type={"submit"}>Next</button>
            </form>
        )
    }
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<WorkExperience/>, document.getElementById("root"));
}

export default ContactsForm;
