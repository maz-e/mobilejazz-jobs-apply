import apiJobs from '../data/apiJobs'
import validate from '../common/validate'
import { LogicError } from '../common/errors'

const logic = {
    applyToJob(name, email, about, urls, teams) {
        validate.arguments([
            { name: 'name', value: name, type: String, notEmpty: true },
            { name: 'email', value: email, type: String, notEmpty: true },
            { name: 'about', value: about, type: String, optional: true },
            { name: 'urls', value: urls, type: Array, notEmpty: true },
            { name: 'teams', value: teams, type: Array, notEmpty: true },
        ])
    
        validate.email(email)
        validate.urls(urls)

        return (async () => {
            try {
                await apiJobs.applyToJob(name, email, about, urls, teams)
            } catch (error) {
                throw new LogicError(error.message)
            }
        })()
    }
}

export default logic