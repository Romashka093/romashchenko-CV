import React from 'react';
import { projects } from '../../helpers/data/projects';
import lang from '../../lang';
import css from './Experience.module.css';

function Experience() {
  return (
    <>
      <section className={css.sectionContainer}>
        <h2 className={css.sectionHeading}>{lang.eng.experience}</h2>
        <ul className={css.projectsList}>
          <h3 className={css.projectsHeading}>{lang.eng.own}</h3>
          {projects.map(project => (
            <li className={css.projectItem} key={project.id}>
              {/* eslint-disable-next-line */}
              <a
                className={css.projectLink}
                href={project.webSiteLink}
                target="_blank"
              >
                <img
                  className={css.projectCover}
                  loading="lazy"
                  src={project.title.default}
                  alt={project.name}
                />
              </a>
              <div className={css.projectDescription}>
                <h4 className={css.projectName}>{project.name}</h4>
                <p className={css.projectAbout}>{project.about}</p>
                <ul className={css.projectTechs}>
                  <h5 className={css.projectTechsHeading}>techs</h5>
                  <li className={css.projectTechItem}>{project.techs}</li>
                  <a
                    className={css.projectRepository}
                    href={project.gitHubLink}
                  >
                    GitHub
                  </a>
                </ul>
              </div>
            </li>
          ))}
        </ul>
        {/* <ul className={css.experienceContent}>
          <h3 className={css.experienceHeading}>{lang.eng.commercial}</h3>
          <li className={css.experienceItem}></li>
        </ul> */}
      </section>
    </>
  );
}

export default Experience;
