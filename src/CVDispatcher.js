import {Dispatcher} from 'flux'
import CVStore from "./CVStore";

class CVDispatcher extends Dispatcher {

    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action,
        });
    }
}

const dispatcher = new CVDispatcher();

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_CONTACTS') {
        return;
    }
    CVStore._contacts = {
        name: data.action.payload.valueOf().name,
        email: data.action.payload.valueOf().email,
        phone: data.action.payload.valueOf().phone,
        address: data.action.payload.valueOf().address
    };
    CVStore.emitChange();
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_JOB') {
        return;
    }
    CVStore._jobs.push(data.action.payload);
    CVStore.emitChange();
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'DELETE_JOB') {
        return;
    }
    console.log("Delete: " + data.action.payload);
    if (data.action.payload >= 0) {
        CVStore._jobs.splice(data.action.payload, 1);
        CVStore.emitChange();
    }
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_SCHOOL') {
        return;
    }
    CVStore._schools.push(data.action.payload);
    CVStore.emitChange();
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'DELETE_SCHOOL') {
        return;
    }
    console.log("Delete: " + data.action.payload);
    if (data.action.payload >= 0) {
        CVStore._schools.splice(data.action.payload, 1);
        CVStore.emitChange();
    }
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_SKILL') {
        return;
    }
    CVStore._skills.push(data.action.payload);
    CVStore.emitChange();
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'DELETE_SKILL') {
        return;
    }
    console.log("Delete: " + data.action.payload);
    if (data.action.payload >= 0) {
        CVStore._skills.splice(data.action.payload, 1);
        CVStore.emitChange();
    }
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_SUMMARY') {
        return;
    }
    CVStore._summary = data.action.payload;
    CVStore.emitChange();
});

export default dispatcher;




