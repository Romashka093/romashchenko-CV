import React from 'react';
import { projects } from '../../helpers/data/projects';
import { useTranslation } from 'react-i18next';
import css from './Experience.module.css';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className={css.sectionContainer}>
        <h2 className={css.sectionHeading}>{t('experience')}</h2>
        <ul className={css.projectsList}>
          <h3 className={css.projectsHeading}>{t('own')}</h3>
          {projects.map(project => (
            <li className={css.projectItem} key={project.id}>
              {/* TODO - add function to open a link with react-router-dom */}
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
          <h3 className={css.experienceHeading}>{t('commercial')}</h3>
          <li className={css.experienceItem}></li>
        </ul> */}
      </section>
    </>
  );
};

export default Experience;
