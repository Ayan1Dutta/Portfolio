import "./HeroImgStyles.css";
import React from 'react'
import IntroImg from "../assets/developer.jpg"
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img className="into-img" src={IntroImg} alt="IntroImg">
                </img>
            </div>
            <div className="content">
                <p> HI, I'M Ayan , I'M a</p>
                <h1>
                <Typewriter
                    options={{
                        strings: ['Coder', 'Frontend','Backend','Developer'],
                        autoStart: true,
                        loop: true,
                    }}
                />
                </h1>
                <div>
                    <Link to="/project" className="btn">Projects</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImg