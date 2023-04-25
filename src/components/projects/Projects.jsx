import React, { Component } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projectsData';

class Projects extends Component {
  render() {
    return (
      <section className="projects-main">
        <h1 id="projectsRef">Projetos</h1>
        <div className="projects-board">
          {projectsData.map((project, index) => (
            <Link key={ index } to={ { pathname: project.url } } target="blank">
              <div
                className="project-div"
              >
                <h2 className="project-name">{project.name}</h2>
                <img className="project-img" src={ project.img } alt={ project.name } />
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;
