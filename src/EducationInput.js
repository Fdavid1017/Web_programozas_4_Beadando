import React from 'react';

class EducationInput extends React.Component {

    render() {
        return (
            <div class={"col"}>
                <div class={"row mt-2"}>
                    <label class={"col"} htmlFor={this.props.name.toString() + "SchoolInputName"}>School name:</label>
                    <input class={"col-7"}
                           type={"text"}
                           id={this.props.name.toString() + "SchoolInputName"}/>
                </div>
                <div class={"row mt-2"}>
                    <label class={"col"} htmlFor={this.props.name.toString() + "EduInputMonthFrom"}>From:</label>
                    <input class={"col-7"}
                           type={"month"}
                           id={this.props.name.toString() + "EduInputMonthFrom"}/>
                </div>
                <div class={"row mt-2"}>
                    <label class={"col"} htmlFor={this.props.name.toString() + "EduInputMonthTill"}>Till:</label>
                    <input class={"col-7"}
                           type={"month"}
                           id={this.props.name.toString() + "EduInputMonthTill"}/>
                </div>
                <div class={"row mt-2"}>
                    <label class={"col"} htmlFor={this.props.name.toString() + "EduInputDesc"}>Education
                        description:</label>
                    <input class={"col-7"}
                           type={"text"}
                           id={this.props.name.toString() + "EduInputDesc"}/>
                </div>
            </div>
        )
    }
}

export default EducationInput;