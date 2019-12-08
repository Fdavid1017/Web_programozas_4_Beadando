import React from 'react';
import CompanyInput from "./CompanyInput";
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import ContactsForm from "./ContactsForm";
import Job from "./Job.js";
import SkillsFormForm from "./SkillsForm";
import {toast} from "react-toastify";

class WorkExperience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schoolName: "",
            froms: "",
            tills: "",
            descs: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        switch (name) {
            case "schoolName":
                this.setState({
                    schoolName: value === "" ? " " : value
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

        window.$education.push(new Job(this.state.schoolName, this.state.from, this.state.till, this.state.desc));

        this.setState({
            schoolName: "",
            froms: "",
            tills: "",
            descs: ""
        });

        toast.configure();
        toast("School infos saved!", {
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
                            <label className={"col"} htmlFor={"comapanyInputName"}>School name:</label>
                            <input name={"schoolName"} className={"col-7"} type={"text"}
                                   value={this.state.companyName} onChange={this.handleInputChange}
                                   id={"schoolInputName"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"InputMonthFrom"}>From:</label>
                            <input name={"froms"} className={"col-7"} type={"month"}
                                   value={this.state.from} onChange={this.handleInputChange} id={"InputMonthFrom"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"InputMonthTill"}>Till:</label>
                            <input name={"tills"} className={"col-7"} type={"month"}
                                   value={this.state.till} onChange={this.handleInputChange} id={"InputMonthTill"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"companyInputDesc"}>Education description:</label>
                            <textarea name={"descs"} className={"col-7"}
                                      value={this.state.desc} onChange={this.handleInputChange}
                                      id={"schoolInputDesc"}/>
                        </div>
                    </div>
                </div>
                <div className={"row w-100"}></div>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <button onClick={this.addInput}>Add more School</button>
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
    ReactDOM.render(<WorkExperience/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<SkillsFormForm/>, document.getElementById("root"));
}

export default WorkExperience;