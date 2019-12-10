import React from "react";
import ReactDOM from "react-dom";
import SummaryPage from "./SummaryPage";
import CVStore from "./CVStore";

class ShowJson extends React.Component {
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
        console.log("Summary on change");
        this.setState({
            _contacts: CVStore._contacts,
            _jobs: CVStore._jobs,
            _schools: CVStore._schools,
            _skills: CVStore._skills,
            _summary: CVStore._summary
        });
    }

    componentDidMount() {
        CVStore.addChangeListener(this._onChange)
        this._onChange();
    }

    componentWillUnmount() {
        CVStore.removeChangeListener(this._onChange)
    }

    printJsonData() {
        let obj = {
            contacts: {
                name: this.state._contacts.valueOf().name,
                phone: this.state._contacts.valueOf().phone,
                email: this.state._contacts.valueOf().email,
                address: this.state._contacts.valueOf().address,
            },
            jobs: this.state._jobs.map(job => {
                    return (
                        {
                            [job.name]: {
                                fromm: job.fromm,
                                till: job.till,
                                description: job.desc
                            }
                        }
                    )
                }
            ),
            Schools: this.state._schools.map(school => {
                    return (
                        {
                            [school.name]: {
                                fromm: school.fromm,
                                till: school.till,
                                description: school.desc
                            }
                        }
                    )
                }
            ),
            Skills: this.state._skills.map(skill => {
                    return (
                        {
                            skill
                        }
                    )
                }
            ),
            $summary: this.state._summary
        };

        let json = JSON.stringify(obj, null, 2);
        return json;
    }

    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <button onClick={previous}>Previous</button>
                    </div>
                </div>
                <div className={"row w-100"}></div>
                <pre className={"row"}>
                    {this.printJsonData()}
                </pre>
            </div>
        )
    }
}

function previous(e) {
    e.preventDefault();
    ReactDOM.render(<SummaryPage/>, document.getElementById("root"));
}

export default ShowJson;