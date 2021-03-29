import React from 'react';
import { skills } from '../../helpers/data/skills';
import { tools } from '../../helpers/data/skills';
import css from './Skills.module.css';
console.log(tools);

export default function Skills() {
  return (
    <>
      <section className={css.skillsSection}>
        <h2 className={css.skillsSectionHeading}>Skills</h2>
        <ul className={css.skillsContainer}>
          {skills.map(skill => (
            <li className={css.skillItem} key={skill.id} title={skill.name}>
              <img
                className={css.skillItemIcon}
                src={skill.logo.default}
                alt={skill.name}
              />
              <p>{skill.name}</p>
            </li>
          ))}
        </ul>
        <h3 className={css.skillsSectionHeading}>Tools</h3>
        <ul className={css.skillsContainer}>
          {tools.map(tool => (
            <li className={css.skillItem} key={tool.id} title={tool.name}>
              <img
                className={css.skillItemIcon}
                src={tool.logo.default}
                alt={tool.name}
              />
              <p>{tool.name}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
