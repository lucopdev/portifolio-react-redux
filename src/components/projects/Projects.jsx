import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import projectsData from '../../data/projectsData';
import './Projects.css';
import './cards.css';

class Projects extends Component {
  render() {
    return (
      <section
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="0"
        className="projects-main"
      >
        <h1 id="projectsRef">Projetos</h1>
        <div className="projects-board">
          {projectsData.map((project, index) => (
            <Link key={ index } to={ { pathname: project.url } } target="blank">
              <div
                data-aos="flip-left"
                data-aos-duration="800"
                data-aos-delay="0"
                className="cardBox"
              >
                <div className="card">
                  {/* <span className="textCard">EM BREVE</span> */}
                  <img
                    className="project-img"
                    src={ project.img }
                    alt={ project.name }
                  />
                  <div className="contentCard">
                    <h2 className="text-title">{project.name}</h2>
                    <p className="text-body">details</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }
}

// Projects.propTypes = {
//   history: PropTypes.shape().isRequired,
// };

export default Projects;
