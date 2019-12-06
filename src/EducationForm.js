import React from 'react';
import ReactDOM from "react-dom";
import EducationInput from "./EducationInput";
import WorkExperience from "./WorkXPForm";
import SkillsForm from "./SkillsForm";

class EducationForm extends React.Component {
    state = {
        inputs: []
    };
    addInput = () => {
        console.log(this.state.inputs.length);
        this.setState({
            inputs: [...this.state.inputs, <EducationInput name={this.state.inputs.length}/>]
        })
    };

    render() {
        return (
            <div class={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <EducationInput name={"def"}/>
                    {this.state.inputs}
                </div>
                <div className={"row w-100"}></div>
                <div class={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <button onClick={this.addInput}>Add more School</button>
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
    ReactDOM.render(<WorkExperience/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<SkillsForm/>, document.getElementById("root"));
}

export default EducationForm;