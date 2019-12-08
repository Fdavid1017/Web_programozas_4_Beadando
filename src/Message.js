import React from "react";

class Message extends React.Component {
    render() {
        return (
            <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                <div className="toast-header">
                    <img src="..." className="rounded mr-2" alt="..."/>
                    <strong className="mr-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    Hello, world! This is a toast message.
                </div>
            </div>
        )
    }
}

/*
<div className={"box row mt-5 d-flex justify-content-center"}>
    <div className={"row "+this.props.type}>
        {this.props.message}
    </div>
</div>*/
export default Message;