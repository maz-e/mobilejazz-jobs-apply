import apiJobs from '.'
import {ValueError, RequirementError, FormatError, ConnectionError, HttpError} from '../../common/errors'

describe('MobileJazz Jobs API', ()=> {
    const name = 'Miguel Angel'
    const email = 'maze@mail.com'
    const about = 'about me'
    const urls = ['https://fake-url.com', 'http://fake-url2.com']
    const teams = ['backend', 'frontend']

    describe('apply', () => {
        it('should success on correct data', async () => {
            const response = await apiJobs.applyToJob(name, email, about, urls, teams)
            
            expect(response.data).toBeDefined()
            expect(response.status).toBe(202)
            expect(response.statusText).toBe('OK')
        })

        it('should fail on wrong url', async () => {
            apiJobs.__url__ = 'wrong url'
            
            try {
                await apiJobs.applyToJob(name, email, about, urls, teams)
                throw Error("should not reach this point")
            } catch (error) {
                expect(error).toBeInstanceOf(ConnectionError)
            }
        })

        it('should fail on invalid url', async () => {
            apiJobs.__url__ = 'https://mobilejazz.com/jobs/applyssss'
            
            try {
                await apiJobs.applyToJob(name, email, about, urls, teams)
                throw Error("should not reach this point")
            } catch (error) {
                expect(error).toBeInstanceOf(HttpError)
            }
        })

        it('should fail on undefined name', () => {
            const name = undefined

            function typeError() {
                apiJobs.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(RequirementError)
            expect(typeError).toThrowError('name is not optional')
        })

        it('should fail on null name', () => {
            const name = null

            function typeError() {
                apiJobs.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(RequirementError)
            expect(typeError).toThrowError('name is not optional')
        })

        it('should fail on empty name', () => {
            const name = ''

            function typeError() {
                apiJobs.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(ValueError)
            expect(typeError).toThrowError('name is empty')
        })

        it('should fail on blank name', () => {
            const name = ' \t    \n'

            function typeError() {
                apiJobs.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(ValueError)
            expect(typeError).toThrowError('name is empty')
        })

        it('should fail on undefined email', () => {
            const email = undefined

            function typeError() {
                apiJobs.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(RequirementError)
            expect(typeError).toThrowError('email is not optional')
        })

        it('should fail on null email', () => {
            const email = null

            function typeError() {
                apiJobs.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(RequirementError)
            expect(typeError).toThrowError('email is not optional')
        })

        it('should fail on empty email', () => {
            const email = ''

            function typeError() {
                apiJobs.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(ValueError)
            expect(typeError).toThrowError('email is empty')
        })

        it('should fail on blank email', () => {
            const email = ' \t    \n'

            function typeError() {
                apiJobs.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(ValueError)
            expect(typeError).toThrowError('email is empty')
        })

        it('should fail on invalid email', () => {
            const email = 'invalid-email'

            function typeError() {
                apiJobs.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(FormatError)
            expect(typeError).toThrowError(`${email} is not an e-mail`)
        })

        //TODO more tests....
    })
})
