import {Dispatcher} from 'flux'
import CVStore from "./CVStore";

class CVDispatcher extends Dispatcher {

    handleViewAction(action) {
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        });
    }
}

const dispatcher = new CVDispatcher();

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_CONTACTS') {
        return;
    }
    CVStore._contacts = {
        name: data.valueOf().name,
        email: data.valueOf().email,
        phone: data.valueOf().phone,
        address: data.valueOf().address
    };
    CVStore.emitChange();
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_JOB') {
        return;
    }
    CVStore._jobs.push(data);
    CVStore.emitChange();
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_SCHOOL') {
        return;
    }
    CVStore._schools.push(data);
    CVStore.emitChange();
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_SKILL') {
        return;
    }
    CVStore._skills.push(data);
    CVStore.emitChange();
});

dispatcher.register((data) => {
    if (data.action.actionType !== 'ADD_SUMMARY') {
        return;
    }
    CVStore._summary = data;
    CVStore.emitChange();
});

export default dispatcher;




