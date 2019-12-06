import React from 'react';
import ContactsForm from './ContactsForm';
import ReactDOM from "react-dom";

class Main extends React.Component {
    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div class={ "col-3"}>
                    <ul>
                        <li>Contacts</li>
                        <li>Jobs</li>
                        <li>Educations</li>
                        <li>Skills</li>
                        <li>Summary</li>
                    </ul>
                </div>
                <div className={"row w-100"}></div>
                <div class={"col-8"} id={"root"}>
                    ReactDOM.render(<ContactsForm/>,document.getElementById("root"));
                </div>
            </div>
        )
    }
}

export default Main;