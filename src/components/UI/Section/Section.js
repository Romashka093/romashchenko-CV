import React from 'react';
import css from './Section.module.css';

const Section = ({ title, text }) => {
  return (
    <>
      <section className={css.sectionContainer}>
        <h2 className={css.sectionHeading}>{title}</h2>
        <p className={css.sectionDescription}>{text}</p>
      </section>
    </>
  );
};

export default Section;
