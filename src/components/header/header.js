import React from 'react';
import Anchor from '../anchor';

import styles from './header.css';

const Header = ({activePage}) => (
  <header className={styles.header}>
    <h1><Anchor to="/" className={styles.name}>Matt Hamlin</Anchor></h1>
    <nav className={styles.headerNav}>
      <ul className={styles.headerList}>
        <li><Anchor to="/blog" className={activePage === "blog" ? styles.headerLinkActive : styles.headerLink}>Blog</Anchor></li>
        {/*<li><Anchor to="/stories" className={activePage === "stories" ? styles.headerLinkActive : styles.headerLink}>Stories</Anchor></li>*/}
        <li><Anchor to="/projects" className={activePage === "projects" ? styles.headerLinkActive : styles.headerLink}>Projects</Anchor></li>
        <li><Anchor to="/travel" className={activePage === "travel" ? styles.headerLinkActive : styles.headerLink}>Travel</Anchor></li>
      </ul>
    </nav>
  </header>
);

export default Header;
