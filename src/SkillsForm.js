import React from 'react';
import ReactDOM from "react-dom";
import SkillsInput from "./SkillsInput";
import EducationForm from "./EducationForm";
import SummaryForm from "./SummaryForm";
import Job from "./Job";

class SkillsFormForm extends React.Component {
    state = {
        inputs: ""
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            inputs: value === "" ? " " : value
        })
    }


    addInput = () => {
        window.$skills.push(this.state.inputs);

        this.setState({
            inputs: ""
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
                        <button onClick={next}>Next</button>
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