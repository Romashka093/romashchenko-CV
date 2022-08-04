import React from 'react';
import { useTranslation } from 'react-i18next';
// import css from './Contacts.module.css';

const Contacts = () => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t('contacts')}</h2>
      <p>some text</p>
    </>
  );
};

export default Contacts;
