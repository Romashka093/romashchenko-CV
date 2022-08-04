import React from 'react';
import Section from '@components/UI/Section/Section';
import Skills from '@components/Skills/Skills';
import { useTranslation } from 'react-i18next';
// import css from './Welcome.module.css';

const Welcome = () => {
  const { t } = useTranslation();

  return (
    <>
      <Section title={t('hello')} text={t('whoIAm')} />
      <Section title={t('myDream')} text={t('target')} />
      <Section title={t('hobbies')} text={t('aboutHobbies')} />
      <Skills />
    </>
  );
};
export default Welcome;
