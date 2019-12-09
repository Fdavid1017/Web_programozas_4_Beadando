import React from 'react';
import CompanyInput from "./CompanyInput";
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import ContactsForm from "./ContactsForm";
import Job from "./Job.js";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class WorkExperience extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            froms: "",
            tills: "",
            descs: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value === undefined ? target.getText() : target.value;
        const name = target.name;

        switch (name) {
            case "companyName":
                this.setState({
                    companyName: value === "" ? " " : value
                });
                break;
            case "froms":
                this.setState({
                    froms: value === "" ? " " : value
                });
                break;
            case "tills":
                this.setState({
                    tills: value === "" ? " " : value
                });
                break;
            case "descs":
                this.setState({
                    descs: value === "" ? " " : value
                });
                break;
            default:
                return;
        }
    }

    addInput = () => {
        window.$jobs.push(new Job(this.state.companyName, this.state.froms, this.state.tills, this.state.descs));
        this.setState({
            companyName: "",
            froms: null,
            tills: null,
            descs: null
        })
        ;
        toast.configure();
        toast("Company infos saved!", {
            position: toast.POSITION.TOP_LEFT,
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
        });
    };


    //{this.state.inputs}
    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <div className={"co l"}>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"comapanyInputName"}>Company name:</label>
                            <input name={"companyName"} className={"col-7"} type={"text"}
                                   value={this.state.companyName} onChange={this.handleInputChange}
                                   id={"comapanyInputName"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"InputMonthFrom"}>From:</label>
                            <input name={"froms"} className={"col-7"} type={"month"} min={"1950-01"}
                                   value={this.state.from} onChange={this.handleInputChange} id={"froms"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"InputMonthTill"}>Till:</label>
                            <input name={"tills"} className={"col-7"} type={"month"} max={Date.now()}
                                   value={this.state.till} onChange={this.handleInputChange} id={"tills"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"companyInputDesc"}>Job description:</label>
                            <textarea name={"descs"} className={"col-7"}
                                      value={this.state.desc} onChange={this.handleInputChange}
                                      id={"descs"}/>
                        </div>
                    </div>
                </div>
                <div className={"row w-100"}></div>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <button onClick={this.addInput}>Add more Job</button>
                        <button onClick={previous}>Previous</button>
                        <button onClick={(event) => {
                            this.addInput();
                            next(event);
                        }}>Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function previous(e) {
    e.preventDefault();
    ReactDOM.render(<ContactsForm/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<EducationForm/>, document.getElementById("root"));
}

export default WorkExperience;