import React from 'react'
import { Link } from 'react-router-dom'
import './index.sass'

function Landing() {
    return <section className="card">
        <img className="card__img" src="https://media.licdn.com/dms/image/C4D03AQFwecvwI_adMA/profile-displayphoto-shrink_200_200/0?e=1566432000&v=beta&t=QMJqk8T-xfQXuIeAPUzo5tlQmHrYC0to4VN2gsY0lCw"/>
        <div className="card__detail">
            <h1 className="card__title">Miguel Angel Zapatero</h1>
            <h3 className="card__subtitle">Fullstack Web Developer</h3>
            <p>Javascript, MERN stack (MongoDB, Express, React, Node.js), Mongoose, HTML5, CSS3, SASS + BEM, REST APIs, Git, Test-Driven development (TDD), Jest, Mocha, Chai, Agile methodology, SCRUM, Slack, Trello</p>
        </div>
        <p className="card__text">Three hard months with more than 12h a day of web development with teammates has become a way of being, if you don't find me testing, debugging or programming... you will find me climbing. </p>
        <p className="card__quote">"You're progressing on something and that's what it's all about. You wanna keep moving, having a progress in your life."<span> - Ueli Steck</span></p>
        <Link className="card__btn btn btn-primary" to='/form'>Apply Jobs Form</Link>
    </section>
}

export default Landing