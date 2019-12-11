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

    deleteJob(index){
        CVDispatcher.handleViewAction({
            actionType: 'DELETE_JOB',
            payload: index
        })
    }

    addSchool(school) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_SCHOOL',
            payload: school
        })
    }

    deleteSchool(index){
        CVDispatcher.handleViewAction({
            actionType: 'DELETE_SCHOOL',
            payload: index
        })
    }

    addSkill(skill) {
        CVDispatcher.handleViewAction({
            actionType: 'ADD_SKILL',
            payload: skill
        })
    }

    deleteSkill(index){
        CVDispatcher.handleViewAction({
            actionType: 'DELETE_SKILL',
            payload: index
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