import React from "react";
import Pong from "./media/pong.png";
import Trade from "./media/trade.png";
import Devbook from "./media/devbook.png";
import Wayfarer from "./media/wayfarer.png";
import Tailored from "./media/tailored.png";
import { Table } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="Projects" className="container">
      <h3 className="about">Projects</h3>
      <div className="row">
        <div className="col-lg-4">
          <div className="content">
            <div className="content-overlay"></div>
            <img
              className="projects pong content-image"
              src={Tailored}
              alt="Vacation"
              width="350"
              height="300"
            />
            <div className="content-details fadeIn-left">
              <a href="https://tailoredforme.herokuapp.com">
                <h3>App</h3>
              </a>
              <a href="https://git.generalassemb.ly/christianvilla/tailored-frontend">
                <h3>GitHub</h3>
              </a>
            </div>
          </div>
          <h2 className="project-title">Tailored</h2>
          <Table hover border variant="dark">
            <tbody className="table keyword">
              <tr>
                <td>
                  <i class="fab fa-react"></i> React
                </td>
                <td>
                  <i class="fab fa-node"></i> Node.js
                </td>
                <td>
                  <i class="fas fa-server"></i> Express
                </td>
              </tr>
            </tbody>
          </Table>
          <p className="project-description">
            An artist app that allows users and Artists to interact with
            eachother.
          </p>
        </div>
        <div className="col-lg-4">
          <div className="content">
            <div className="content-overlay"></div>
            <img
              className="projects pong content-image"
              src={Devbook}
              alt="Vacation"
              width="350"
              height="300"
            />
            <div className="content-details fadeIn-left">
              <a href="https://devbookdevs.herokuapp.com">
                <h3>App</h3>
              </a>
              <a href="https://github.com/lawrencema415/devbook">
                <h3>GitHub</h3>
              </a>
            </div>
          </div>
          <h2 className="project-title">Devbook</h2>
          <Table hover border variant="dark">
            <tbody className="table keyword">
              <tr>
                <td>
                  <i class="fab fa-python"></i> Python
                </td>
                <td>
                  <i class="fas fa-server"></i> Django
                </td>
                <td>
                  <i class="fas fa-database"></i> Postgres{" "}
                </td>
              </tr>
            </tbody>
          </Table>
          <p className="project-description">
            A social media platform to connect with other developers.
          </p>
        </div>
        <div className="col-lg-4">
          <div className="content">
            <div className="content-overlay"></div>
            <img
              className="projects pong content-image"
              src={Wayfarer}
              alt="Vacation"
              width="350"
              height="300"
            />
            <div className="content-details fadeIn-left">
              <a href="https://wayfarer-mern-frontend.herokuapp.com/">
                <h3>App</h3>
              </a>
              <a href="https://github.com/jacksonherron/Wayfarer">
                <h3>GitHub</h3>
              </a>
            </div>
          </div>
          <h2 className="project-title">Wayfarer</h2>
          <Table hover border variant="dark">
            <tbody className="table keyword">
              <tr>
                <td>
                  <i class="fab fa-react"></i> React
                </td>
                <td>
                  <i class="fab fa-node"></i> Node.js
                </td>
                <td>
                  <i class="fas fa-server"></i> Express
                </td>
              </tr>
            </tbody>
          </Table>
          <p className="project-description">
            A travelers social media platform where they can visit cities and
            talk about what they enjoyed.
          </p>
        </div>
        <div className="col-lg-4">
          <div className="content">
            <div className="content-overlay"></div>
            <img
              className="projects pong content-image"
              src={Trade}
              alt="Vacation"
              width="350"
              height="300"
            />
            <div className="content-details fadeIn-left">
              <a href="https://thetrade.herokuapp.com/">
                <h3>App</h3>
              </a>
              <a href="https://git.generalassemb.ly/johnhill/the-trade">
                <h3>GitHub</h3>
              </a>
            </div>
          </div>
          <h2 className="project-title">The Trade</h2>
          <Table hover border variant="dark">
            <tbody className="table keyword">
              <tr>
                <td>
                  <i class="fab fa-js"></i> JavaScript
                </td>
                <td>
                  <i class="fab fa-node"></i> Node.js
                </td>
                <td>
                  <i class="fas fa-server"></i> Express
                </td>
              </tr>
            </tbody>
          </Table>
          <p className="project-description">
            A selling platform where you can buy and sell products.
          </p>
        </div>
        <div className="col-lg-4">
          <div className="content">
            <div className="content-overlay"></div>
            <img
              className="projects pong content-image"
              src={Pong}
              alt="Vacation"
              width="350"
              height="300"
            />
            <div className="content-details fadeIn-left">
              <a href="https://pages.git.generalassemb.ly/christianvilla/Project-0-game/">
                <h3>App</h3>
              </a>
              <a href="https://git.generalassemb.ly/christianvilla/Project-0-game">
                <h3>GitHub</h3>
              </a>
            </div>
          </div>
          <h2 className="project-title">Pong solo</h2>
          <Table hover border variant="dark">
            <tbody className="table keyword">
              <tr>
                <td>
                  <i className="fab fa-html5"></i> HTML{" "}
                </td>
                <td>
                  <i className="fab fa-css3-alt"></i> CSS{" "}
                </td>
                <td>
                  <i className="fab fa-js"></i> JavaScript{" "}
                </td>
              </tr>
            </tbody>
          </Table>
          <p className="project-description">
            A solo pong game that challenges your reaction time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
