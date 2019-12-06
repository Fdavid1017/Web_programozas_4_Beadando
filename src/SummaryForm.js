import React from "react";
import ReactDOM from "react-dom";
import SkillsForm from "./SkillsForm";
import CompanyInput from "./CompanyInput";

class SummaryForm extends React.Component {
    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"summaryInput"}>Summary:</label>
                            <input className={"col-7"} type={"text"} id={"summaryInput"}/>
                        </div>
                    </div>
                </div>
                <div className={"row w-100"}></div>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <button onClick={previous}>Previous</button>
                        <button onClick={next}>Next</button>
                    </div>
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