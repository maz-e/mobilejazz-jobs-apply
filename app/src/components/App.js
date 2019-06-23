import React, { useState } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import logic from '../logic'
import FeedBack from './FeedBack'
import Landing from './Landing'
import Form from './Form'
import './index.sass'

function App({history}) {
    const [msg, setMsg] = useState(null)

    async function handleApply(name, email, about, urls, teams) {
        try {
            await logic.applyToJob(name, email, about, urls, teams)
            history.push('/')
            setMsg('Job applied!')
        } catch (error) {
            setMsg(error.message)
        }
    }

    function closeAlert() {
        setMsg(null)
    }

    return <main className="home">
        <FeedBack msg={msg} onClose={closeAlert}/>
        <Switch>
            <Route exact path='/' render={()=><Landing/>}/>
            <Route exact path='/form' render={()=><Form onSubmit={handleApply}/>} />
            <Redirect to='/'/>
        </Switch>
    </main>
}

export default withRouter(App);
