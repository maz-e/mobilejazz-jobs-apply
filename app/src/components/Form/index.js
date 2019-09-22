import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import List from '../List'
import './index.sass'

function Form({ onSubmit }) {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [about, setAbout] = useState(null)
    const [urls, setUrls] = useState([])
    const [teams, setTeams] = useState([])
    
    function handleSubmit(e) {
        e.preventDefault()
        
        onSubmit(name, email, about, urls, teams)
    }

    function handleChange(e) {
        const index = teams.findIndex(team => team === e.target.value)
        
        if(index < 0) teams.push(e.target.value)
        else teams.splice(index, 1)
        
        setTeams(teams)
    }

    function addUrl(e) {
        e.preventDefault()
        let arr = []
        const url = e.target.previousSibling.value

        if (urls.length) arr = urls.map(url => url)
        
        if(url) {
            arr.push(url)
            setUrls(arr)
        }

        e.target.previousSibling.value = ''
    }

    function handleDelete() {
        setName(null)
        setEmail(null)
        setAbout(null)
        setUrls([])
        setTeams([])
    }

    function resetUrlList(e) {
        e.preventDefault()
        setUrls([])
    }

    return <form className="jobform" onSubmit={handleSubmit}>
        <h2 className="jobform__title">MOBILEJAZZ JOBS FORM</h2>
        <input className="jobform__input" type="text" name="name" placeholder="Name..." required onChange={e => setName(e.target.value)}/>
        <input className="jobform__input" type="email" name="email" placeholder="Email..." required onChange={e => setEmail(e.target.value)}/>
        <textarea className="jobform__text" name="about" placeholder="About me..." required onChange={e => setAbout(e.target.value)}></textarea>
        <div className="urls">
            <input className="urls__input" type="url" name="url" placeholder="Portfolios, projects, LinkedIn..."/>
            <button className="urls__btn" onClick={addUrl}>Add</button>
            <button className="urls__btn btn-danger" onClick={resetUrlList}>Reset</button>
            <List urls={urls}/>
        </div>
        <div className="jobform__checkboxes">
            <label><input type="checkbox" name="teams" value="android" onChange={handleChange}/>Android</label>
            <label><input type="checkbox" name="teams" value="ios" onChange={handleChange}/>iOS</label>
            <label><input type="checkbox" name="teams" value="frontend" onChange={handleChange}/>Frontend</label>
            <label><input type="checkbox" name="teams" value="backend" onChange={handleChange}/>Backend</label>
            <label><input type="checkbox" name="teams" value="design" onChange={handleChange}/>Design</label>
            <label><input type="checkbox" name="teams" value="sysops" onChange={handleChange}/>Sysops</label>
        </div>
        <button className="jobform__btn btn btn-primary">Send</button>
        <Link className="btn btn-secundary" to='/' onClick={handleDelete}>Back to Home</Link>
    </form>
}

export default Form