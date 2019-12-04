import React from 'react';
import ReactDOM from "react-dom";
import SkillsInput from "./SkillsInput";
import EducationForm from "./EducationForm";
import SummaryForm from "./SummaryForm";

class SkillsFormForm extends React.Component {
    state = {
        inputs: []
    };
    addInput = () => {
        console.log(this.state.inputs.length);
        this.setState({
            inputs: [...this.state.inputs, <SkillsInput name={this.state.inputs.length}/>]
        })
    };

    render() {
        return (
            <div>
                <SkillsInput name={"def"}/>
                {this.state.inputs}
                <div>
                    <button onClick={this.addInput}>Add more Skill</button>
                    <button onClick={previous}>Previous</button>
                    <button onClick={next}>Next</button>
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