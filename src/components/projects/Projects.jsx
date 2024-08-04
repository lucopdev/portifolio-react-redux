/* eslint-disable max-len */
/* eslint-disable react/jsx-max-depth */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../../data/projectsData';
import './Projects.css';
import './cards.css';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: projectsData.map(() => 0),
    };
  }

  componentDidMount() {
    const intervalInSeconds = 2000;
    this.interval = setInterval(this.updateImageIndexes, intervalInSeconds);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateImageIndexes = () => {
    this.setState((prevState) => ({
      currentImageIndex: prevState.currentImageIndex.map((index, i) => (index + 1) % projectsData[i].images.length),
    }));
  };

  render() {
    const { currentImageIndex } = this.state;

    return (
      <section
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-delay="0"
        className="projects-main"
      >
        <h1 id="projectsRef">Projetos - Frontend</h1>
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
                  <img className="project-img" src={ project.images[currentImageIndex[index]] } alt={ project.name } />
                  <div className="contentCard">
                    <h2 className="text-title">{project.name}</h2>
                    <p className="text-body">
                      Tech:
                      {' '}
                      {project.tech}
                    </p>
                    <a href={ project.repository } target="_blank" rel="noreferrer">
                      <h5 className="text-repo">Repositório</h5>
                    </a>
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

export default Projects;
