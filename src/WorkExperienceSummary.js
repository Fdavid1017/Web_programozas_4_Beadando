import React from "react";

class WorkExperienceSummary extends React.Component {
    render() {
        return (
            <div className={"row"}>
                <div className={"row"}>
                    <div className={"col text-left"}><h5>{this.props.company}</h5></div>
                    <div className={"col text-right text-nowrap font-weight-light"}><h6>{this.props.fromTill}</h6></div>
                </div>
                <div className={"row  w-100 text-left"}>
                    <div className={"col text-justify"}>
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default WorkExperienceSummary;