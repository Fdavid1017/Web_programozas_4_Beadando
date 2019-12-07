import React from 'react';
import CompanyInput from "./CompanyInput";
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import ContactsForm from "./ContactsForm";
import Job from "./Job.js";

class WorkExperience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: [],
            companyName: "",
            froms: "",
            tills: "",
            descs: "",
            jobs: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        window.$jobs = this.state.jobs;
        alert(window.$jobs.valueOf()[0].desc);
        next(event);
    }

    addInput = () => {
        console.log(this.state.inputs.length);
        this.setState({
            inputs: [...this.state.inputs,
                <CompanyInput name={this.state.inputs.length} onChange={this.handleInputChange()}/>]
        });
        this.setState({
            jobs: [...this.state.jobs, new Job(this.state.companyName,
                this.state.froms,
                this.state.tills, this.state.descs)]
        });
    };

    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <CompanyInput name={"def"} onChange={this.handleInputChange()}/>
                    {this.state.inputs}
                </div>
                <div className={"row w-100"}></div>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <button onClick={this.addInput}>Add more Job</button>
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
    ReactDOM.render(<ContactsForm/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<EducationForm/>, document.getElementById("root"));
}

export default WorkExperience;