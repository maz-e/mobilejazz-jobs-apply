import validate from '../../common/validate'
import {ConnectionError, HttpError} from '../../common/errors'
import axios from 'axios'

const apiJobs = {
    __url__: 'https://mobilejazz.com/jobs/apply',

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
        
        return axios({
            url: this.__url__,
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
                name,
                email,
                about,
                urls,
                teams
            }
        })
        .then(response => response)
        .catch(error => {
            if(error.code === 'ECONNREFUSED') throw new ConnectionError(error.message)

            if(error.response) {
                const { response } = error
                
                throw new HttpError(response)
            }

            return error
        })
    }
}

export default apiJobs