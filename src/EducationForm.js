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
            <div>
                <EducationInput name={"def"}/>
                {this.state.inputs}
                <div>
                    <button onClick={this.addInput}>Add more School</button>
                    <button onClick={previous}>Previous</button>
                    <button onClick={next}>Next</button>
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