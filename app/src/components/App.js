import React, { useState } from 'react'
import { Route, withRouter, Redirect, Switch } from 'react-router-dom'
import logic from '../logic'
import FeedBack from './FeedBack'
import SwitchToggle from './SwitchToggle'
import Landing from './Landing'
import Form from './Form'
import './index.sass'

function App({history}) {
    const [msg, setMsg] = useState(null)
    const [testMode, setTestMode] = useState(true)

    async function handleApply(name, email, about, urls, teams) {
        try {
            let message = await logic.applyToJob(name, email, about, urls, teams)
            history.push('/')
            setMsg(message)
        } catch (error) {
            setMsg(error.message)
        }
    }

    function closeAlert() {
        setMsg(null)
    }

    function handleSwitch(e) {
        setTestMode(e.target.checked)
        logic.__mode__ = e.target.checked
    }

    return <main className="home">
        <FeedBack msg={msg} onClose={closeAlert}/>
        <SwitchToggle test={testMode} onSwitch={handleSwitch}/>
        <Switch>
            <Route exact path='/' render={()=><Landing/>}/>
            <Route exact path='/form' render={()=><Form onSubmit={handleApply}/>} />
            <Redirect to='/'/>
        </Switch>
    </main>
}

export default withRouter(App);
