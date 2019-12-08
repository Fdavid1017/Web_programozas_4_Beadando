import React from 'react';

class CompanyInput extends React.Component {


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div className={"col"}>
                <div className={"row mt-2"}>
                    <label className={"col"} htmlFor={this.props.name.toString() + "InputName"}>Company name:</label>
                    <input name={"companyName"} className={"col-7"} type={"text"}
                           onChange={this.handleInputChange} id={this.props.name.toString() + "InputName"}/>
                </div>
                <div className={"row mt-2"}>
                    <label className={"col"} htmlFor={this.props.name.toString() + "InputMonthFrom"}>From:</label>
                    <input name={"froms"} className={"col-7"} type={"month"}
                           onChange={this.handleInputChange} id={this.props.name.toString() + "InputMonthFrom"}/>
                </div>
                <div className={"row mt-2"}>
                    <label className={"col"} htmlFor={this.props.name.toString() + "InputMonthTill"}>Till:</label>
                    <input name={"tills"} className={"col-7"} type={"month"}
                           onChange={this.handleInputChange} id={this.props.name.toString() + "InputMonthTill"}/>
                </div>
                <div className={"row mt-2"}>
                    <label className={"col"} htmlFor={this.props.name.toString() + "InputDesc"}>Job description:</label>
                    <textarea name={"descs"} className={"col-7"}
                              onChange={this.handleInputChange} id={this.props.name.toString() + "InputDesc"}/>
                </div>
            </div>
        )
    }
}

export default CompanyInput;