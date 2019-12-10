import CVDispatcher from "./CVDispatcher"

class CVActions {

    addContacts(contacts) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_CONTACTS',
            payload: contacts
        })
    }

    addJob(job) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_JOB',
            payload: job
        })
    }

    addSchool(school) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_SCHOOL',
            payload: school
        })
    }

    addSkill(skill) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_SKILL',
            payload: skill
        })
    }

    addSummary(summary) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_SUMMARY',
            payload: summary
        })
    }
}

export default new CVActions();