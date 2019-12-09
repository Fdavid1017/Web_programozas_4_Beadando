import React from "react";
import WorkExperienceSummary from "./WorkExperienceSummary";
import ReactDOM from "react-dom";
import SkillsForm from "./SkillsForm";
import SummaryForm from "./SummaryForm";
import ShowJson from "./ShowJson";

class SummaryPage extends React.Component {

    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row"}>
                    <button onClick={previous}>Previous</button>
                    <button onClick={next}>Show Json</button>
                </div>
                <div className={"row w-100"}></div>
                <div className={"row h-100 w-100"}>
                    <div className={"col w-100 h-100"}>
                        <div className={"row"}>
                            <div className={"row text-left font-weight-bold"}>
                                <h1><u>{window.$contact.valueOf().name}</u></h1>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"row text-left font-weight-bold"}><h5><u>Address:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row w-100 text-left"}>{window.$contact.valueOf().address}</div>
                        </div>
                        <div className={"row"}>
                            <div className={"row text-left font-weight-bold"}><h5><u>Phone:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row w-100 text-left"}>{window.$contact.valueOf().phone}</div>
                        </div>
                        <div className={"row"}>
                            <div className={"row text-left font-weight-bold"}><h5><u>E-mail:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row w-100 text-left"}>{window.$contact.valueOf().email}</div>
                        </div>
                    </div>
                    <div className={"col w-100 h-100"}>
                        <div className={"row"}>
                            <div className={"row"}><h5><u>Work Experience:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row"}>
                                {
                                    window.$jobs.map(item =>
                                        <WorkExperienceSummary company={item.name} fromTill={
                                            item.fromm + " - " + item.till
                                        } description={item.desc}/>
                                    )
                                }
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"row"}><h5><u>Education:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row"}>
                                {
                                    window.$education.map(item =>
                                        <WorkExperienceSummary company={item.name} fromTill={
                                            item.fromm + " - " + item.till
                                        } description={item.desc}/>
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
                                        window.$skills.map(item =>
                                            <li>{item}</li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className={"row"}>
                            <div className={"row"}><h5><u>Summary:</u></h5></div>
                            <div className={"row w-100"}></div>
                            <div className={"row text-justify"}>
                                {window.$summary}
                            </div>
                        </div>
                    </div>
                </div>
                < /div>
                    )
                    }
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
