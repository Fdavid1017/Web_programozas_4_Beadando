import React from "react";
import WorkExperienceSummary from "./WorkExperienceSummary";
import ReactDOM from "react-dom";
import SummaryForm from "./SummaryForm";
import ShowJson from "./ShowJson";
import html2canvas from "html2canvas";
import jsPDF from 'jspdf';
import CVStore from "./CVStore";

class SummaryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            _contacts: [],
            _jobs: [],
            _schools: [],
            _skills: [],
            _summary: ""
        };
        this._onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({
            _contacts: CVStore._contacts,
            _jobs: CVStore._jobs,
            _schools: CVStore._schools,
            _skills: CVStore._skills,
            _summary: CVStore._summary
        });
    }

    componentDidMount() {
        CVStore.addChangeListener(this._onChange);
        this._onChange();
    }

    componentWillUnmount() {
        CVStore.removeChangeListener(this._onChange)
    }


    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <button onClick={previous}>Previous</button>
                    <button onClick={next}>Show Json</button>
                    <button onClick={downloadPDF}>Download PDF</button>
                </div>
                <div className={"row w-100"}></div>
                <div id={"capture"} className={"row h-100 w-100"}>
                    <div className={"col w-100 h-100"}>
                        <div className={"row"}>
                            <div className={"row text-left font-weight-bold"}>
                                <h1><u>{this.state._contacts.name}</u></h1>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"row text-left font-weight-bold"}><h5><u>Address:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row w-100 text-left"}>{this.state._contacts.address}</div>
                        </div>
                        <div className={"row"}>
                            <div className={"row text-left font-weight-bold"}><h5><u>Phone:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row w-100 text-left"}>{this.state._contacts.phone}</div>
                        </div>
                        <div className={"row"}>
                            <div className={"row text-left font-weight-bold"}><h5><u>E-mail:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row w-100 text-left"}>{this.state._contacts.email}</div>
                        </div>
                    </div>
                    <div className={"col w-100 h-100"}>
                        <div className={"row"}>
                            <div className={"row"}><h5><u>Work Experience:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row"}>
                                {
                                    this.state._jobs.map(job =>
                                        <WorkExperienceSummary company={job.name} fromTill={
                                            job.fromm + " - " + job.till
                                        } description={job.desc}/>
                                    )
                                }
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"row"}><h5><u>Education:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row"}>
                                {
                                    this.state._schools.map(school =>
                                        <WorkExperienceSummary company={school.name} fromTill={
                                            school.fromm + " - " + school.till
                                        } description={school.desc}/>
                                    )
                                }
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"row"}><h5><u>Skils:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row w-100"}>
                                <ul>
                                    {
                                        this.state._skills.map(skill =>
                                            <li>{skill}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"row"}><h5><u>Summary:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row text-justify"}>
                                {this.state._summary}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


function downloadPDF() {
    const input = document.getElementById('capture');
    html2canvas(input)
        .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF();
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("CV.pdf");
        })
    ;
}

function previous(e) {
    e.preventDefault();
    ReactDOM.render(<SummaryForm/>, document.getElementById("root"));
}

function next(e) {
    e.preventDefault();
    ReactDOM.render(<ShowJson/>, document.getElementById("root"));
}


export default SummaryPage;
