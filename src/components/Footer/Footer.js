import React from 'react';
import { contactLinks } from '../../helpers/data/contacts';
import css from './Footer.module.css';

export default function Footer() {
  return (
    <>
      <footer className={css.footer}>
        <ul className={css.footerContainer}>
          {contactLinks.map(link => (
            <li key={link.id} className={css.footerItem}>
              <a
                href={link.href}
                title={link.name}
                target={'_blank'}
                className={css.footerItemLink}
                rel="noreferrer"
              >
                <img
                  className={css.footerItemIcon}
                  src={link.img.default}
                  alt={link.name}
                />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
}
