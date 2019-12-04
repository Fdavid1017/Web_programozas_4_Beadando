import React from 'react';
import CompanyInput from "./CompanyInput";
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import ContactsForm from "./ContactsForm";

class WorkExperience extends React.Component {
    state = {
        inputs: []
    };

    constructor(props) {
        super(props);
        alert("const");
        alert(ContactsForm.state.name);
    }

    addInput = () => {
        console.log(this.state.inputs.length);
        this.setState({
            inputs: [...this.state.inputs, <CompanyInput name={this.state.inputs.length}/>]
        })
    };

    render() {
        return (
            <div>
                <CompanyInput name={"def"}/>
                {this.state.inputs}
                <div>
                    <button onClick={this.addInput}>Add more Job</button>
                    <button onClick={previous}>Previous</button>
                    <button onClick={next}>Next</button>
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