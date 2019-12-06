import React from 'react';

class CompanyInput extends React.Component {

    render() {
        return (
            <div class={"col"}>
                <div class={"row mt-2"}>
                    <label class={"col"} htmlFor={this.props.name.toString() + "InputName"}>Company name:</label>
                    <input class={"col-7"} type={"text"}
                           id={this.props.name.toString() + "InputName"}/>
                </div>
                <div class={"row mt-2"}>
                    <label class={"col"} htmlFor={this.props.name.toString() + "InputMonthFrom"}>From:</label>
                    <input class={"col-7"} type={"month"}
                           id={this.props.name.toString() + "InputMonthFrom"}/>
                </div>
                <div class={"row mt-2"}>
                    <label class={"col"} htmlFor={this.props.name.toString() + "InputMonthTill"}>Till:</label>
                    <input class={"col-7"} type={"month"}
                           id={this.props.name.toString() + "InputMonthTill"}/>
                </div>
                <div class={"row mt-2"}>
                    <label class={"col"} htmlFor={this.props.name.toString() + "InputDesc"}>Job description:</label>
                    <input class={"col-7"}
                           type={"text"}
                           id={this.props.name.toString() + "InputDesc"}/>
                </div>
            </div>
        )
    }
}

export default CompanyInput;