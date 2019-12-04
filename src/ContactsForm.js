import React from 'react';
import WorkExperience from "./WorkXPForm";
import ReactDOM from "react-dom";
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
        event.preventDefault();
        window.$name = this.state.name;
        window.$phone = this.state.phone;
        window.$email = this.state.email;
        window.$address = this.state.address;
        next(event);
    }

    render() {
        return (
            <div>
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
            </div>
        )
    }
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<WorkExperience/>, document.getElementById("root"));
}

export default ContactsForm;
