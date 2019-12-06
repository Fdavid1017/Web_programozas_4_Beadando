import React from "react";
import ReactDOM from "react-dom";
import SkillsForm from "./SkillsForm";

class SummaryForm extends React.Component{
    render() {
        return(
            <div>
            <div>
                <label htmlFor={"summaryInput"}>Summary:</label>
                <input type={"text"} id={"summaryInput"}/>
            </div>
                <div>
                     <button onClick={previous}>Previous</button>
                    <button onClick={next}>Next</button>
                </div>
            </div>
        )
    }
}


function previous(e) {
    e.preventDefault();
    ReactDOM.render(<SkillsForm/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    // ReactDOM.render(<EducationForm/>, document.getElementById("root"));
}


export default SummaryForm;