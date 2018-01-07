import React from 'react';
import styles from "./Footer.scss";
import GitHubLogo from './GitHub-Mark-Light-64px.png';

const year = new Date().getFullYear();

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <small className={styles.copyright}>&copy; {year} Sasha Bajzek</small>
      <a href="https://github.com/SashaBajzek/js-808">
        <img className={styles.image} src={GitHubLogo} alt="Github" />
      </a>
    </div>
  </footer>
);

export default Footer;