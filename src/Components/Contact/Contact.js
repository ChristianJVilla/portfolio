import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div id="Contact" className="container contact-me">
        <h3 className="about">Contact me</h3>
            <ul class="contact-li">
                <li><a href="mailto:christianj.villa@gmail.com?subject=Hi there!" ><i class="fas fa-envelope"></i> christianj.villa@gmail.com</a></li>
                <li><a href="https://www.linkedin.com/in/christianjvilla"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                <li><a href="https://git.generalassemb.ly/christianvilla"><i class="fab fa-github-square"></i> github</a></li>
            </ul>
        </div>
    )
}


export default Contact;