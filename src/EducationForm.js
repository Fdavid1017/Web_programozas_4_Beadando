import React from 'react';
import ReactDOM from "react-dom";
import Facility from "./Job.js";
import SkillsFormForm from "./SkillsForm";
import {toast} from "react-toastify";
import CVActions from "./CVActions";
import WorkExperience from "./JobsForm";
import CVStore from "./CVStore";

class EducationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            schoolName: "",
            froms: "",
            tills: "",
            descs: "",
            schools: [],
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
        this.state.schools = CVStore._schools;
        this.getOptions();
        if (this.state.schools.length < 1) {
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
                schoolName: "",
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
                schoolName: this.state.schools[this.state.selectedOption - 1].valueOf().name,
                froms: this.state.schools[this.state.selectedOption - 1].valueOf().fromm,
                tills: this.state.schools[this.state.selectedOption - 1].valueOf().till,
                descs: this.state.schools[this.state.selectedOption - 1].valueOf().desc,
                saveButton: "visible"
            })
        } else {
            this.setState({
                schoolName: "",
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
        const value = target.value;
        const name = target.name;

        switch (name) {
            case "schoolName":
                this.setState({
                    schoolName: value === "" ? " " : value.toString()
                });
                break;
            case "froms":
                this.setState({
                    froms: value === "" ? " " : value.toString()
                });
                break;
            case "tills":
                this.setState({
                    tills: value === "" ? " " : value.toString()
                });
                break;
            case "descs":
                this.setState({
                    descs: value === "" ? " " : value.toString()
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
        let school = new Facility(this.state.schoolName, this.state.froms, this.state.tills, this.state.descs);
        this.state.selectedOption = -1;
        CVActions.addSchool(school);

        toast.configure();
        toast("School infos saved!", {
            position: toast.POSITION.TOP_LEFT,
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
        });
    };

    saveEdits = () => {
        let school = new Facility(this.state.schoolName, this.state.froms, this.state.tills, this.state.descs);
        CVStore._schools[this.state.selectedOption - 1] = school;
        this.state.selectedOption = -1;
        this._onChange();

        toast.configure();
        toast("School infos edited!", {
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
        for (let i = 0; i < this.state.schools.length; i++) {
            this.state.options.push(
                <option key={i}
                        value={i}>{this.state.schools[i].valueOf().name}</option>
            );
        }
    }
    
    delete = () => {
        let i = this.state.selectedOption - 1;
        this.state.selectedOption = -1;
        CVActions.deleteSchool(i);
    };

    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <div className={"co l"}>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"comapanyInputName"}>School name:</label>
                            <input name={"schoolName"} className={"col-7"} type={"text"}
                                   value={this.state.schoolName} onChange={this.handleInputChange}
                                   id={"schoolInputName"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"InputMonthFrom"}>From:</label>
                            <input name={"froms"} className={"col-7"} type={"month"}
                                   value={this.state.froms} onChange={this.handleInputChange} id={"InputMonthFrom"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"InputMonthTill"}>Till:</label>
                            <input name={"tills"} className={"col-7"} type={"month"}
                                   value={this.state.tills} onChange={this.handleInputChange} id={"InputMonthTill"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"companyInputDesc"}>Education description:</label>
                            <textarea name={"descs"} className={"col-7"}
                                      value={this.state.descs} onChange={this.handleInputChange}
                                      id={"schoolInputDesc"}/>
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
                        <button className={this.state.saveButton} onClick={this.delete}>Delete this School</button>
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

export default EducationForm;