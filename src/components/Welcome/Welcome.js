import React from 'react';
import Skills from '../Skills/Skills';
import Section from '../UI/Section/Section';
import languages from '../../lang';
// import css from './Welcome.module.css';

export default function Welcome() {
  return (
    <>
      <Section title={languages.eng.hello} text={languages.eng.whoIAm} />
      <Section title={languages.eng.myDream} text={languages.eng.target} />
      <Section
        title={languages.eng.hobbies}
        text={languages.eng.aboutHobbies}
      />
      <Skills />
    </>
  );
}
