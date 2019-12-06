import React from 'react';
import CompanyInput from "./CompanyInput";
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import ContactsForm from "./ContactsForm";

class WorkExperience extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inputs: [],
            companyNames: [],
            froms: [],
            tills: [],
            descs: []
        };

        this.setState({
            inputs: [...this.state.inputs, <CompanyInput name={this.state.inputs.length}/>]
        });

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        window.$name = this.state.name;
        window.$phone = this.state.phone;
        window.$email = this.state.email;
        window.$address = this.state.address;
        next(event);
    }

    addInput = () => {
        console.log(this.state.inputs.length);
        this.setState({
            inputs: [...this.state.inputs, <CompanyInput name={this.state.inputs.length}/>]
        });
        // alert(window.$name + "\n" + window.$address);
    };

    render() {
        return (
            <div class={"box row mt-5 d-flex justify-content-center"}>
                <div class={"row"}>
                    <CompanyInput name={"def"}/>
                    {this.state.inputs}
                </div>
                <div className={"row w-100"}></div>
                <div class={"row d-flex flex-row-reverse"}>
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