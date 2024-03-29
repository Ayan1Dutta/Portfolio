import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const WorkCard = (props) => {
    return (
        <div className="project-card">
            <div className="Ndiv">
                <img src={props.imgsrc} alt="ProjectImg"></img>
            </div>

            <div className="pro-details">
                <h2 className="project-title">{props.title}</h2>
                <p>{props.text}</p>
                <div className="pro-btns">
                    <NavLink to={props.Live} className="btn btn-light">View</NavLink>
                    <NavLink to={props.src} className="btn ">Source</NavLink>
                </div>
            </div>
        </div>
    )
}

export default WorkCard