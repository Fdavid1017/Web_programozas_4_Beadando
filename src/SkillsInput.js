import React from 'react';

class SkillsInput extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <label htmlFor={this.props.name.toString() + "SkillInputName"}>Skill:</label><input type={"text"}
                                                                                                          id={this.props.name.toString() + "SkillInputName"}/>
                </div>
            </div>
        )
    }
}

export default SkillsInput;