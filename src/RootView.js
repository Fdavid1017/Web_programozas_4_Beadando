import React from 'react';
import ContactsForm from './ContactsForm';
import ReactDOM from "react-dom";
import WorkExperience from "./WorkXPForm";

class Main extends React.Component {
    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row mt-5 d-flex justify-content-center"}>
                    <div className={""}>
                        <ul>
                            <li>Contacts</li>
                            <li>Jobs</li>
                            <li>Educations</li>
                            <li>Skills</li>
                            <li>Summary</li>
                        </ul>
                    </div>
                </div>
                <div className={"col"} id={"root"}>
                    <ContactsForm/>
                </div>
            </div>
        )
    }
}

export default Main;