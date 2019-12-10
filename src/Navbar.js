import React from 'react';
import ReactDOM from "react-dom";
import ContactsForm from "./ContactsForm";

class Navbar extends React.Component {
    render() {
        return (
            <div className={"navbar text-white mt-5 d-flex justify-content-center"}>
                <div onClick={home} className={"navbar-brand nav-home"}>
                    <img src={"/resources/approved.svg"} id={"brand-logo"} alt={"CV LOGO"}/>
                    CV Generator
                </div>
            </div>
        )
    }
}

function home(e) {
    e.preventDefault();
    window.$contact = null;
    window.$jobs = [];
    window.$education = [];
    window.$skills = [];
    window.$summary = "";
    ReactDOM.render(<ContactsForm/>, document.getElementById("root"));
}

export default Navbar;