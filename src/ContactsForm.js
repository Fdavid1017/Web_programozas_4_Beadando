import React from 'react';
import WorkExperience from "./CompanyForm";
import ReactDOM from "react-dom";
import {connect} from 'react-redux'
import {Field, reduxForm, formValueSelector, getFormValues} from 'redux-form'
import CompanyInput from "./CompanyInput";
import Contact from "./Contact";
import Message from "./Message";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Slide, Zoom, Flip, Bounce} from 'react-toastify';

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
        window.$contact = new Contact(this.state.name, this.state.phone, this.state.email, this.state.address);
        toast.configure();
        toast("Contacts saved!", {
            position: toast.POSITION.TOP_LEFT,
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
        });
        next(event);
    }

    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <form className={"col"} onSubmit={this.handleSubmit} name={"contacts"}>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"nameInputField"}>Name:</label>
                            <input className={"col-8"} name={"name"} type={"text"}
                                   id={"nameInputField"}
                                   value={this.state.value}
                                   onChange={this.handleInputChange}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"telInputField"}>Phone:</label>
                            <input className={"col-8"} name={"phone"} type={"tel"}
                                   id={"telInputField"}
                                   value={this.state.value}
                                   onChange={this.handleInputChange}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"emailInputField"}>E-mail:</label>
                            <input className={"col-8"} name={"email"} type={"email"}
                                   id={"emailInputField"}
                                   value={this.state.value}
                                   onChange={this.handleInputChange}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"addressInputField"}>Address:</label>
                            <input className={"col-8"} name={"address"} type={"text"}
                                   id={"addressInputField"}
                                   value={this.state.value}
                                   onChange={this.handleInputChange}/>
                        </div>
                    </form>
                </div>
                <div className={"row w-100"}></div>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <button onClick={this.handleSubmit}>Next</button>
                    </div>
                </div>
            </div>
        )
    }
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<WorkExperience/>, document.getElementById("root"));
}

export default ContactsForm;
