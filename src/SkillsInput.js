import React from 'react';

class SkillsInput extends React.Component {

    render() {
        return (
            <div class={"row"}>
                <div class={"col mt-2"}>
                    <label class={"col-xl"} htmlFor={this.props.name.toString() + "SkillInputName"}>Skill:</label>
                    <input class={"col-xl"} type={"text"}
                           id={this.props.name.toString() + "SkillInputName"}/>
                </div>
            </div>
        )
    }
}

export default SkillsInput;