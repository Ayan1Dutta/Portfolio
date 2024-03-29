import "./FromStyles.css"
import React, { useRef } from 'react'
import emailjs from "@emailjs/browser";
// import { alert } from 'react-alert'

const From = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "service_9q3ldxg",
            "template_7tyw05a",
            form.current,
            "aiEc1PN9bBF7FQ_yL"
          )
          .then(
            (result) => {
             alert("Mail Send Successfully");
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
    return (
        <div className="form" >
            <form ref={form} onSubmit={sendEmail}>
                <label>Your Name</label>
                <input type="text" name="user_name"></input>
                <label>Email</label>
                <input type="email" name="user_email"></input>
                <label>Subject</label>
                <input type="text"></input>
                <label>Message</label>
                <textarea rows="6" placeholder="Type Your Message Here"  name="message" />
                <button className="btn" type="submit" value="Send">Submit</button>
            </form>
        </div>
    )
}

export default From