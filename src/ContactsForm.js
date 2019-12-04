import React from 'react';
import './App.css';
import WorkExperience from "./WorkXPForm";
import ReactDOM from "react-dom";

class ContactsForm extends React.Component {
    render() {
        return (
            <div>
                <div className="input_field">
                    <label htmlFor={"nameInputField"}>Name:</label><input type={"text"} onChange={handleNameChange}
                                                                          id={"nameInputField"} value={this.state.name}/>
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
                <button type={"button"} onClick={next}>Next</button>
            </div>
        )
    }
}

function handleNameChange(e) {
    this.setState({name: e.target.value});
}

function next(e) {
    e.preventDefault();
    //  let name = document.getElementById("nameInputField");
    console.log("Tha name is: " + this.state.name);
    ReactDOM.render(<WorkExperience/>, document.getElementById("root"));
}

export default ContactsForm;
