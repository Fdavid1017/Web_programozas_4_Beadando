import React from 'react';

class CompanyInput extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <label htmlFor={this.props.name.toString() + "InputName"}>Company name:</label><input type={"text"}
                                                                                                          id={this.props.name.toString() + "InputName"}/>
                </div>
                <div>
                    <label htmlFor={this.props.name.toString() + "InputMonthFrom"}>From:</label><input type={"month"}
                                                                                                       id={this.props.name.toString() + "InputMonthFrom"}/>
                </div>
                <div>
                    <label htmlFor={this.props.name.toString() + "InputMonthTill"}>Till:</label><input type={"month"}
                                                                                                       id={this.props.name.toString() + "InputMonthTill"}/>
                </div>
                <div>
                    <label htmlFor={this.props.name.toString() + "InputDesc"}>Job description:</label><input
                    type={"text"}
                    id={this.props.name.toString() + "InputDesc"}/>
                </div>
            </div>
        )
    }
}

export default CompanyInput;