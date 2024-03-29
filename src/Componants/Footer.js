import "./FooterStyles.css"
import React from 'react'
import { FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-contanier">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                        <div>
                            <p>WestBengal,Paschim Medinipur</p>
                            <p>India</p>
                            <p>721201</p>
                        </div>
                    </div>
                    <div className="phone">
                        <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            7318823783 </h4>

                    </div>
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />ayandutt2002@gmail.com</h4>
                    </div>
                </div>
                <div className="right">
                    <div className="social">
                        <a href="https://www.linkedin.com/in/ayan-dutta-a78058216/" style={{ marginRight: "2rem"}}>
                            <FaLinkedin size={30} style={{ color: "#fff" }} />
                        </a>
                        <a href="https://github.com/Ayan1Dutta" style={{ marginRight: "2rem"}}>
                            <FaGithub size={30} style={{ color: "#fff"}} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
