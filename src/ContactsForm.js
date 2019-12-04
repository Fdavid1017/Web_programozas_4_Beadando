import React from 'react';
import WorkExperience from "./WorkXPForm";
import ReactDOM from "react-dom";
import {connect} from 'react-redux'
import {Field, reduxForm, formValueSelector} from 'redux-form'

class ContactsForm extends React.Component {
    render() {
        return (
            <form onSubmit={next}>
                <div className="input_field">
                    <label htmlFor={"nameInputField"}>Name:</label><input type={"text"} id={"nameInputField"}/>
                </div>
                <div className="input_field">
                    <label htmlFor={"telInputField"}>Phone:</label><input type={"tel"} id={"telInputField"}/>
                </div>
                <div className="input_field">
                    <label htmlFor={"emailInputField"}>E-mail:</label><input type={"email"} id={"emailInputField"}/>
                </div>
                <div className="input_field">
                    <label htmlFor={"addressInputField"}>Address:</label><input type={"text"} id={"addressInputField"}/>
                </div>
                <button type={"submit"}>Next</button>
            </form>
        )
    }
}

function next(e) {
    e.preventDefault();
    console.log("Tha name is this: ");
    ReactDOM.render(<WorkExperience/>, document.getElementById("root"));
}

export default ContactsForm;
