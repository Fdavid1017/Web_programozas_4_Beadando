import React from 'react';
import ReactDOM from 'react-dom';
import ContactsForm from './ContactsForm';
import Main from "./RootView";
import * as serviceWorker from './serviceWorker';
import Navbar from "./Navbar";
import Contact from "./Contact";
import Jobs from "./Job.js";

window.$contact=null;
window.$jobs=[];

ReactDOM.render(<Navbar/>, document.getElementById("nav"));
ReactDOM.render(<ContactsForm/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
