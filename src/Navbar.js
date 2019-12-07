import React from 'react';

class Navbar extends React.Component {
    render() {
        return (
            <div className={"navbar text-white mt-5 d-flex justify-content-center"}>
                <div className={"navbar-brand"}>
                    <img src={"/resources/approved.svg"} id={"brand-logo"} alt={"CV LOGO"}/>
                    CV Generator
                </div>
            </div>
        )
    }
}

export default Navbar;