import "./TecCard.css"
import React from 'react'
import { Link } from "react-router-dom"

const TecCard = (props) => {
    return (
        <Link to={props.src}>
            <div className="project-card pc">
                <div className="Ndiv">
                    <img src={props.imgsrc} alt="ProjectImg" ></img>
                    <h2 className="project-title">{props.title}</h2>
                </div>
                <div className="pro-details">
                    <p>{props.text}</p>
                </div>
            </div>
        </Link>
    )
}
export default TecCard