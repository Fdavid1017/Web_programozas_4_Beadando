import React from "react";
import ReactDOM from "react-dom";
import SkillsForm from "./SkillsForm";
import {toast} from "react-toastify";
import SummaryPage from "./SummaryPage";
import CVActions from "./CVActions";
import CVStore from "./CVStore";

class SummaryForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            summary: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.state.summary = CVStore._summary;
    }

    componentDidMount() {
        CVStore.addChangeListener(this._onChange);
        this._onChange();
    }

    componentWillUnmount() {
        CVStore.removeChangeListener(this._onChange)
    }


    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            summary: value === "" ? " " : value
        });
    }

    addInput = () => {
        //   window.$summary = this.state.summary;
        CVActions.addSummary(this.state.summary);
        this.setState({
            summary: ""
        });
        toast.configure();
        toast("Summary saved!", {
            position: toast.POSITION.TOP_LEFT,
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
        });
    };


    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <div className={"col"}>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"summaryInput"}>Summary:</label>
                            <textarea value={this.state.summary} onChange={this.handleInputChange} className={"col-7"}
                                      id={"summaryInput"}/>
                        </div>
                    </div>
                </div>
                <div className={"row w-100"}></div>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <button onClick={previous}>Previous</button>
                        <button onClick={(event) => {
                            this.addInput();
                            next(event);
                        }}>Next
                        </button>
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
    //ReactDOM.render(<ShowJson/>, document.getElementById("root"));
    ReactDOM.render(<SummaryPage/>, document.getElementById("root"));
}


export default SummaryForm;