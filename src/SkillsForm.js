import React from 'react';
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import SummaryForm from "./SummaryForm";
import {toast} from "react-toastify";
import CVActions from "./CVActions";
import CVStore from "./CVStore";

class SkillsFormForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: "",
            skills: [],
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
        this.state.skills = CVStore._skills;
        this.getOptions();
        if (this.state.skills.length < 1) {
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
                inputs: "",
                saveButton: "invisible"
            });
            return;
        }
        console.log("Option: " + this.state.selectedOption);
        if (this.state.selectedOption > 0) {
            this.setState({
                inputs: this.state.skills[this.state.selectedOption - 1].valueOf(),
                saveButton: "visible"
            })
        } else {
            this.setState({
                inputs: "",
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
            case "input":
                this.setState({
                    inputs: value === "" ? " " : value
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
        //   window.$skills.push(this.state.inputs);
        this.state.selectedOption = -1;
        CVActions.addSkill(this.state.inputs);

        toast.configure();
        toast("Skill saved!", {
            position: toast.POSITION.TOP_LEFT,
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
        });
    };

    saveEdits = () => {
        CVStore._skills[this.state.selectedOption - 1] = this.state.inputs;
        this.state.selectedOption = -1;
        this._onChange();

        toast.configure();
        toast("Skill edited!", {
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
        for (let i = 0; i < this.state.skills.length; i++) {
            this.state.options.push(
                <option key={i}
                        value={i}>{this.state.skills[i].valueOf()}</option>
            );
        }
    }

    delete = () => {
        let i = this.state.selectedOption - 1;
        this.state.selectedOption = -1;
        CVActions.deleteSkill(i);
    };

    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <div className={"col mt-2"}>
                        <label className={"col-xl"}
                               htmlFor={"SkillInputName"}>Skill:</label>
                        <input name={"input"} className={"col-xl"} type={"text"}
                               value={this.state.inputs} onChange={this.handleInputChange} id={"SkillInputName"}/>
                    </div>
                </div>
                <div className={"row w-100"}></div>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <select name={"selected"} onChange={this.handleInputChange} className={this.state.visible}>
                            {this.state.options}
                        </select>
                        <button className={this.state.saveButton} onClick={this.saveEdits}>Save Edits</button>
                        <button className={this.state.saveButton} onClick={this.delete}>Delete this Skill</button>
                        <button onClick={this.addInput}>Add more Skill</button>
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
    ReactDOM.render(<EducationForm/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<SummaryForm/>, document.getElementById("root"));
}

export default SkillsFormForm;