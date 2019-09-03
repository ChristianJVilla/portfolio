import React from 'react';
import './About.css'
import {Table} from 'react-bootstrap';

const About = () => {
    return (
        <div id="About" className="container">
            <h3 className="about">About Me</h3>
                <img className="christian" src="https://media.licdn.com/dms/image/C5603AQGqiGztI2yfxg/profile-displayphoto-shrink_200_200/0?e=1573084800&v=beta&t=IOKbjPXabN4TrgnMp7w4rBec0tnVSiPZVp4WYVn_BUA" alt="" />
            <section>
            <p className="me">
            Hi! I'm Christian, a <span className="keyword"> Software Engineer </span> who enjoys creating, learning, and building things that <span className="keyword">impact</span> peoples lives on the web. I develop websites and work on projects to grow and extend my talents.
            After leading teams in the corporate and clinical fields, I Wanted to push myself to the next level and strive in the Tech industry through Software Engineering. I am a <span className="keyword">Full Stack Engineer</span> that creates an organized backend and a beautiful frontend!
            <br/>
            Here's a few <span className="keyword">technologies</span> I've been working with recently:
            </p>
            </section>
            <Table hover borderless variant="dark">
            <tbody className="table keyword">
                <tr>
                <td><i class="fab fa-js"></i> JavaScript</td>
                <td><i class="fab fa-react"></i> React</td>
                <td><i class="fab fa-node"></i> Node.js</td>
                <td><i class="fas fa-server"></i> Express</td>
                </tr>
                <tr>
                <td><i class="fab fa-python"></i> Python</td>
                <td><i class="fas fa-server"></i> Django</td>
                <td><i class="fas fa-database"></i> Postgres | MongoDB | Flask</td>
                <td><i class="fab fa-html5"></i> HTML & CSS <i class="fab fa-css3-alt"></i></td>
                </tr>
            </tbody >
            </Table>
        </div>
    )
}


export default About;