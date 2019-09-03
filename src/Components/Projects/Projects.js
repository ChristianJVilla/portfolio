import React from 'react';
import Pong from './media/pong.png';
import Trade from './media/trade.png';
import Devbook from './media/devbook.png';
import Wayfarer from './media/wayfarer.png';
import {Table} from 'react-bootstrap';
import './Projects.css';

const Projects = () => {
    return (
        <div id="Projects" className="container">
            <h3 className="about">Projects</h3>
            <div className="row">
        <div className="col-lg-4">
          <a href="https://pages.git.generalassemb.ly/christianvilla/Project-0-game/" >
            <img className="projects pong" src={Pong} alt="Vacation" width="350" height="300" />
          </a>
          <h2 className="project-title">Pong solo</h2>
          <Table hover border variant="dark">
            <tbody className="table keyword">
                <tr>
                <td><i className="fab fa-html5"></i> HTML </td>
                <td><i className="fab fa-css3-alt"></i> CSS </td>
                <td><i className="fab fa-js"></i> JavaScript </td>
                </tr>
            </tbody >
            </Table>
          <p className="project-description">A solo pong game that challenges your reaction time.</p>
        </div>
        <div className="col-lg-4">
          <a href="https://devbookdevs.herokuapp.com">
            <img className="projects devbook" src={Devbook} alt="Connect" width="350" height="300" />
          </a>
          <h2 className="project-title">Devbook</h2>
          <Table hover border variant="dark">
            <tbody className="table keyword">
                <tr>
                <td><i class="fab fa-python"></i> Python</td>
                <td><i class="fas fa-server"></i> Django</td>
                <td><i class="fas fa-database"></i> Postgres </td>
                <td><i class="fab fa-css3-alt"></i> CSS </td>
                </tr>
            </tbody >
            </Table>
          <p className="project-description">A social media platform to connect with other developers.</p>
        </div>
        <div className="col-lg-4">
          <a href="https://wayfarer-mern-frontend.herokuapp.com/">
            <img className="projects wayfarer" src={Wayfarer} alt="Camera" width="350" height="300" />
          </a>
          <h2 className="project-title">Wayfarer</h2>
          <Table hover border variant="dark">
            <tbody className="table keyword">
                <tr>
                <td><i class="fab fa-react"></i> React</td>
                <td><i class="fab fa-node"></i> Node.js</td>
                <td><i class="fas fa-server"></i> Express</td>
                <td><i class="fab fa-css3-alt"></i> CSS </td>
                </tr>
            </tbody >
            </Table>
          <p className="project-description">A travelers social media platform where they can visit cities and talk about what they enjoyed.</p>
        </div>
        <div className="col-lg-4">
          <a href="https://thetrade.herokuapp.com/">
            <img className="projects trade" src={Trade} alt="Camera" width="350" height="300" />
          </a>
          <h2 className="project-title">The Trade</h2>
          <Table hover border variant="dark">
            <tbody className="table keyword">
                <tr>
                <td><i class="fab fa-js"></i> JavaScript</td>
                <td><i class="fab fa-node"></i> Node.js</td>
                <td><i class="fas fa-server"></i> Express</td>
                <td><i class="fab fa-html5"></i> HTML & CSS <i class="fab fa-css3-alt"></i></td>
                </tr>
            </tbody >
            </Table>
          <p className="project-description">A selling platform where you can buy and sell products.</p>
        </div>
      </div>
        </div>
    )
}


export default Projects;