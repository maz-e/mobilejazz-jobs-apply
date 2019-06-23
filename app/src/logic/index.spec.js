import logic from '.'
import apiJobs from '../data/apiJobs'
import { ValueError, RequirementError, FormatError, LogicError } from '../common/errors'

describe('logic', ()=> {
    const name = 'Miguel Angel'
    const email = 'maze@mail.com'
    const about = 'about me'
    const urls = ['https://fake-url.com', 'http://fake-url2.com']
    const teams = ['backend', 'frontend']

    describe('apply', () => {
        it('should success on correct data', async () => {
            const response = await logic.applyToJob(name, email, about, urls, teams)
            
            expect(response).toBeUndefined()
        })

        it('should fail on wrong url', async () => {
            apiJobs.__url__ = 'wrong url'
            
            try {
                await logic.applyToJob(name, email, about, urls, teams)
                throw Error("should not reach this point")
            } catch (error) {
                expect(error).toBeInstanceOf(LogicError)
            }
        })

        it('should fail on invalid url', async () => {
            apiJobs.__url__ = 'https://mobilejazz.com/jobs/applyssss'
            
            try {
                await logic.applyToJob(name, email, about, urls, teams)
                throw Error("should not reach this point")
            } catch (error) {
                expect(error).toBeInstanceOf(LogicError)
            }
        })

        it('should fail on undefined name', () => {
            const name = undefined

            function typeError() {
                logic.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(RequirementError)
            expect(typeError).toThrowError('name is not optional')
        })

        it('should fail on null name', () => {
            const name = null

            function typeError() {
                logic.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(RequirementError)
            expect(typeError).toThrowError('name is not optional')
        })

        it('should fail on empty name', () => {
            const name = ''

            function typeError() {
                logic.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(ValueError)
            expect(typeError).toThrowError('name is empty')
        })

        it('should fail on blank name', () => {
            const name = ' \t    \n'

            function typeError() {
                logic.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(ValueError)
            expect(typeError).toThrowError('name is empty')
        })

        it('should fail on undefined email', () => {
            const email = undefined

            function typeError() {
                logic.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(RequirementError)
            expect(typeError).toThrowError('email is not optional')
        })

        it('should fail on null email', () => {
            const email = null

            function typeError() {
                logic.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(RequirementError)
            expect(typeError).toThrowError('email is not optional')
        })

        it('should fail on empty email', () => {
            const email = ''

            function typeError() {
                logic.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(ValueError)
            expect(typeError).toThrowError('email is empty')
        })

        it('should fail on blank email', () => {
            const email = ' \t    \n'

            function typeError() {
                logic.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(ValueError)
            expect(typeError).toThrowError('email is empty')
        })

        it('should fail on invalid email', () => {
            const email = 'invalid-email'

            function typeError() {
                logic.applyToJob(name, email, about, urls, teams)
            }

            expect(typeError).toThrowError(FormatError)
            expect(typeError).toThrowError(`${email} is not an e-mail`)
        })

        //TODO more tests....
    })
})

