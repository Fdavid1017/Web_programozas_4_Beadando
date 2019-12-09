import React from "react";
import Contact from "./Job";
import {toast} from "react-toastify";
import ReactDOM from "react-dom";
import SummaryForm from "./SummaryForm";
import SummaryPage from "./SummaryPage";

let json = null;

function printJsonData() {
    let obj = {
        contacts: {
            name: window.$contact.valueOf().name,
            phone: window.$contact.valueOf().phone,
            email: window.$contact.valueOf().email,
            address: window.$contact.valueOf().address,
        },
        jobs: [JSON.stringify(window.$jobs, null, 2)],
        Schools: [JSON.stringify(window.$jobs, null, 2)],
        Skills: [JSON.stringify(window.$skills, null, 2)],
        $summary: window.$summary.toString()
    };

    json = JSON.stringify(obj, null, 2);
    return json;
}

function download() {
    if (json === null) {
        toast.configure();
        toast("Json file is empty!", {
            position: toast.POSITION.TOP_LEFT,
            type: toast.TYPE.ERROR,
            autoClose: 3000,
        });
        return;
    }

    var fileDownload = require('react-file-download');
    fileDownload(json, 'CV.json');
}

class ShowJson extends React.Component {
    render() {
        return (
            <div className={"box row mt-5 d-flex justify-content-center"}>
                <div className={"row d-flex flex-row-reverse"}>
                    <div className="col p-2">
                        <button onClick={previous}>Previous</button>
                        <button id={"downloadAnchorElem"} onClick={download}>Download Json</button>
                    </div>
                </div>
                <div className={"row w-100"}></div>
                <pre className={"row"}>
                    {printJsonData()}
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