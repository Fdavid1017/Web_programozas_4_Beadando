import React from 'react';

class SkillsInput extends React.Component {

    render() {
        return (
            <div className={"row"}>
                <div className={"col mt-2"}>
                    <label className={"col-xl"} htmlFor={this.props.name.toString() + "SkillInputName"}>Skill:</label>
                    <input className={"col-xl"} type={"text"}
                           id={this.props.name.toString() + "SkillInputName"}/>
                </div>
            </div>
        )
    }
}

export default SkillsInput;