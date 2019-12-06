import React from 'react';

class EducationInput extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <label htmlFor={this.props.name.toString() + "SchoolInputName"}>School name:</label><input
                    type={"text"}
                    id={this.props.name.toString() + "SchoolInputName"}/>
                </div>
                <div>
                    <label htmlFor={this.props.name.toString() + "EduInputMonthFrom"}>From:</label><input type={"month"}
                                                                                                          id={this.props.name.toString() + "EduInputMonthFrom"}/>
                </div>
                <div>
                    <label htmlFor={this.props.name.toString() + "EduInputMonthTill"}>Till:</label><input type={"month"}
                                                                                                          id={this.props.name.toString() + "EduInputMonthTill"}/>
                </div>
                <div>
                    <label htmlFor={this.props.name.toString() + "EduInputDesc"}>Education description:</label><input
                    type={"text"}
                    id={this.props.name.toString() + "EduInputDesc"}/>
                </div>
            </div>
        )
    }
}

export default EducationInput;