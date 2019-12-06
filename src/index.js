import React from 'react';
import ReactDOM from 'react-dom';
import ContactsForm from './ContactsForm';
import Main from "./RootView";
import * as serviceWorker from './serviceWorker';

window.$name = "";
window.phone = "";
window.$email = "";
window.$address = "";

window.$jobs = [];

ReactDOM.render(<Main/>, document.getElementById("main"));
//ReactDOM.render(<ContactsForm/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
