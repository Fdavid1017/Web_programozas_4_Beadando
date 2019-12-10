import React from 'react';
import ReactDOM from 'react-dom';
import ContactsForm from './ContactsForm';
import * as serviceWorker from './serviceWorker';
import Navbar from "./Navbar";

window.$contact=null;
window.$jobs=[];
window.$education=[];
window.$skills=[];
window.$summary="";
/*
window.$companyName=[];
window.$time=[];
window.$desc=[];*/

ReactDOM.render(<Navbar/>, document.getElementById("nav"));
ReactDOM.render(<ContactsForm/>, document.getElementById("root"));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
