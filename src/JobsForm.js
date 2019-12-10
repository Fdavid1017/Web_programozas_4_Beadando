import React from 'react';
import ReactDOM from "react-dom";
import EducationForm from "./EducationForm";
import ContactsForm from "./ContactsForm";
import Facility from "./Job.js";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CVActions from "./CVActions";
import CVStore from "./CVStore";

class WorkExperience extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            companyName: "",
            froms: "",
            tills: "",
            descs: "",
            jobs: [],
            options: [],
            selected: 1,
            visible: "visible"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({
                jobs: CVStore._jobs
            }
        );
        this.getOptions();
        console.log(JSON.stringify(this.state.options));
        console.log(this.state.jobs.length);
        if (this.state.jobs.length < 1) {
            this.setState({
                companyName: "",
                froms: "",
                tills: "",
                descs: "",
                visible: "invisible"
            });
            console.log("If");
        } else if (this.state.jobs.length === 1) {
            let fm = new Date();
            let year = this.state.jobs[0].valueOf().fromm.toString().split('-')[0];
            let month = this.state.jobs[0].valueOf().fromm.toString().split('-')[1];
            fm.setFullYear(year);
            fm.setMonth(month);
            console.log(fm);
            let tl = new Date();
            year = this.state.jobs[0].valueOf().till.toString().split('-')[0];
            month = this.state.jobs[0].valueOf().till.toString().split('-')[1];
            tl.setFullYear(year);
            tl.setMonth(month);
            tl.setDate(this.state.jobs[0].valueOf().till);
            this.setState({
                companyName: this.state.jobs[0].valueOf().name,
                froms: this.state.jobs[0].valueOf().fromm,
                tills: tl,
                descs: this.state.jobs[0].valueOf().desc,
                visible: "invisible"
            });
            console.log("ElseIf\n" + JSON.stringify(this.state.jobs[0]));
        } else {
            this.setState({
                companyName: this.state.jobs[this.state.selected].name,
                froms: this.state.jobs[this.state.selected].fromm,
                tills: this.state.jobs[this.state.selected].till,
                descs: this.state.jobs[this.state.selected].desc,
                visible: "visible"
            });
            console.log("Else\n" + JSON.stringify(this.state.jobs[this.state.selected]));
        }
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
        const value = target.value === undefined ? target.getText() : target.value;
        const name = target.name;

        switch (name) {
            case "companyName":
                this.setState({
                    companyName: value === "" ? " " : value
                });
                break;
            case "froms":
                this.setState({
                    froms: value === "" ? " " : value
                });
                break;
            case "tills":
                this.setState({
                    tills: value === "" ? " " : value
                });
                break;
            case "descs":
                this.setState({
                    descs: value === "" ? " " : value
                });
                break;
            case "selected":
                this.setState({
                    selected: target.selectedIndex
                });
                this._onChange();
                break;
            default:
                return;
        }
    }

    addInput = () => {
        //  window.$jobs.push(new Job(this.state.companyName, this.state.froms, this.state.tills, this.state.descs));
        let job = new Facility(this.state.companyName, this.state.froms.toString(), this.state.tills.toString(), this.state.descs);
        CVActions.addJob(job);
        this.setState({
            companyName: "",
            froms: null,
            tills: null,
            descs: null
        })
        ;
        toast.configure();
        toast("Company infos saved!", {
            position: toast.POSITION.TOP_LEFT,
            type: toast.TYPE.SUCCESS,
            autoClose: 3000,
        });
    };

    getOptions() {
        this.state.jobs.map(job =>
            this.state.options.push(<select key={job.valueOf().name}
                                         value={job.valueOf().name}>job.valueOf().name</select>)
        )
    }

    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <div className={"co l"}>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"comapanyInputName"}>Company name:</label>
                            <input name={"companyName"} className={"col-7"} type={"text"}
                                   value={this.state.companyName} onChange={this.handleInputChange}
                                   id={"comapanyInputName"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"InputMonthFrom"}>From:</label>
                            <input name={"froms"} className={"col-7"} type={"month"}
                                   value={this.state.froms} onChange={this.handleInputChange} id={"froms"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"InputMonthTill"}>Till:</label>
                            <input name={"tills"} className={"col-7"} type={"month"}
                                   value={this.state.tills}
                                   onChange={this.handleInputChange} id={"tills"}/>
                        </div>
                        <div className={"row mt-2"}>
                            <label className={"col"} htmlFor={"companyInputDesc"}>Job description:</label>
                            <textarea name={"descs"} className={"col-7"}
                                      value={this.state.descs} onChange={this.handleInputChange}
                                      id={"descs"}/>
                        </div>
                    </div>
                </div>
                <div className={"row w-100"}></div>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <select name={"selected"} onChange={this.handleInputChange} className={this.state.visible}>
                            {this.state.options}
                        </select>
                        <button onClick={this.addInput}>Add more Job</button>
                        <button onClick={previous}>Previous</button>
                        <button onClick={(event) => {
                            this.addInput();
                            next(event);
                        }}>Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function previous(e) {
    e.preventDefault();
    ReactDOM.render(<ContactsForm/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<EducationForm/>, document.getElementById("root"));
}

export default WorkExperience;