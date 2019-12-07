import React from 'react';

class CompanyInput extends React.Component {

    render() {
        return (
            <div className={"col"}>
                <div className={"row mt-2"}>
                    <label className={"col"} htmlFor={this.props.name.toString() + "InputName"}>Company name:</label>
                    <input className={"col-7"} type={"text"}
                           id={this.props.name.toString() + "InputName"}/>
                </div>
                <div className={"row mt-2"}>
                    <label className={"col"} htmlFor={this.props.name.toString() + "InputMonthFrom"}>From:</label>
                    <input className={"col-7"} type={"month"}
                           id={this.props.name.toString() + "InputMonthFrom"}/>
                </div>
                <div className={"row mt-2"}>
                    <label className={"col"} htmlFor={this.props.name.toString() + "InputMonthTill"}>Till:</label>
                    <input className={"col-7"} type={"month"}
                           id={this.props.name.toString() + "InputMonthTill"}/>
                </div>
                <div className={"row mt-2"}>
                    <label className={"col"} htmlFor={this.props.name.toString() + "InputDesc"}>Job description:</label>
                    <textarea className={"col-7"}
                           id={this.props.name.toString() + "InputDesc"}/>
                </div>
            </div>
        )
    }
}

export default CompanyInput;