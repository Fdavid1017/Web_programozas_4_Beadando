import React from 'react';
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import SummaryForm from "./SummaryForm";
import {toast} from "react-toastify";
import CVActions from "./CVActions";

class SkillsFormForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputs: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            inputs: value === "" ? " " : value
        })
    }


    addInput = () => {
        //   window.$skills.push(this.state.inputs);
        CVActions.addSkill(this.state.inputs);
        this.setState({
            inputs: ""
        });

        toast.configure();
        toast("Skill saved!", {
            position: toast.POSITION.TOP_LEFT,
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
        });
    };

    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <div className={"col mt-2"}>
                        <label className={"col-xl"}
                               htmlFor={"SkillInputName"}>Skill:</label>
                        <input className={"col-xl"} type={"text"}
                               value={this.state.inputs} onChange={this.handleInputChange} id={"SkillInputName"}/>
                    </div>
                </div>
                <div className={"row w-100"}></div>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
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