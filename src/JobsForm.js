import React from 'react';
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import ContactsForm from "./ContactsForm";
import Facility from "./Job.js";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CVActions from "./CVActions";
import CVStore from "./CVStore";

class WorkExperience extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            froms: "",
            tills: "",
            descs: "",
            jobs: [],
            options: [],
            selectedOption: -1,
            selectedValue: "null",
            visible: "visible",
            saveButton: "visible"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.state.jobs = CVStore._jobs;
        this.getOptions();
        if (this.state.jobs.length < 1) {
            this.setState({
                visible: "invisible"
            });
        } else {
            this.setState({
                visible: "visible"
            });
        }
        if (this.state.selectedOption === -1) {
            this.setState({
                companyName: "",
                froms: "",
                tills: "",
                descs: "",
                saveButton: "invisible"
            });
            return;
        }
        console.log("Option: " + this.state.selectedOption);
        if (this.state.selectedOption > 0) {
            this.setState({
                companyName: this.state.jobs[this.state.selectedOption - 1].valueOf().name,
                froms: this.state.jobs[this.state.selectedOption - 1].valueOf().fromm,
                tills: this.state.jobs[this.state.selectedOption - 1].valueOf().till,
                descs: this.state.jobs[this.state.selectedOption - 1].valueOf().desc,
                saveButton: "visible"
            })
        } else {
            this.setState({
                companyName: "",
                froms: "",
                tills: "",
                descs: "",
                saveButton: "invisible"
            });
        }
    }

    componentDidMount() {
        CVStore.addChangeListener(this._onChange);
        this._onChange();
    }

    componentWillUnmount() {
        CVStore.removeChangeListener(this._onChange)
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
            case "selected":
                this.state.selectedOption = target.selectedIndex;
                this.state.selectedValue = target.value;
                console.log("OnChange State: " + this.state.selectedOption + "\nOnchange value: " + this.state.selectedValue);
                this._onChange();
                break;
            default:
                return;
        }
    }

    addInput = () => {
        //  window.$jobs.push(new Job(this.state.companyName, this.state.froms, this.state.tills, this.state.descs));
        this.state.selectedOption = -1;
        let job = new Facility(this.state.companyName, this.state.froms.toString(), this.state.tills.toString(), this.state.descs);
        CVActions.addJob(job);

        toast.configure();
        toast("Company infos saved!", {
            position: toast.POSITION.TOP_LEFT,
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
        });
    };

    saveEdits = () => {
        let job = new Facility(this.state.companyName, this.state.froms.toString(), this.state.tills.toString(), this.state.descs);
        CVStore._jobs[this.state.selectedOption - 1] = job;
        this.state.selectedOption = -1;
        this._onChange();
        toast.configure();
        toast("Company infos edit saved!", {
            position: toast.POSITION.TOP_LEFT,
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
        });
    };

    getOptions() {
        this.state.options = [];
        this.state.options.push(
            <option key={"null"} value={"null"}>---</option>
        );
        for (let i = 0; i < this.state.jobs.length; i++) {
            this.state.options.push(
                <option key={i}
                        value={i}>{this.state.jobs[i].valueOf().name}</option>
            );
        }
    }

    delete = () => {
        let i = this.state.selectedOption - 1;
        this.state.selectedOption = -1;
        CVActions.deleteJob(i);
    };

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
                            <input name={"froms"} className={"col-7"} type={"month"}
                                   value={this.state.froms} onChange={this.handleInputChange} id={"froms"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"InputMonthTill"}>Till:</label>
                            <input name={"tills"} className={"col-7"} type={"month"}
                                   value={this.state.tills}
                                   onChange={this.handleInputChange} id={"tills"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"companyInputDesc"}>Job description:</label>
                            <textarea name={"descs"} className={"col-7"}
                                      value={this.state.descs} onChange={this.handleInputChange}
                                      id={"descs"}/>
                        </div>
                    </div>
                </div>
                <div className={"row w-100"}></div>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <select name={"selected"} onChange={this.handleInputChange} className={this.state.visible}>
                            {this.state.options}
                        </select>
                        <button className={this.state.saveButton} onClick={this.saveEdits}>Save Edits</button>
                        <button className={this.state.saveButton} onClick={this.delete}>Delete this Job</button>
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