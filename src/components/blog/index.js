import React from 'react';
import Helmet from "react-helmet";
import Anchor from '../anchor';
import Header from '../header/header';
import Subnav from './subnav';

import styles from './blog.css';

const Link = ({to, children}) => (
  <Anchor to={to} className={styles.link}>{children}</Anchor>
);

const Blog = (props) => (
  <div className={styles.blog}>
    <div className={styles.hibar}></div>
    <Helmet title="Blog" />
    <header className={styles.header}>
      <h1><Anchor to="/" className={styles.name}>Matt Hamlin</Anchor></h1>
      <nav className={styles.headerNav}>
        <ul className={styles.headerList}>
          <li><Anchor to="/blog" className={styles.headerLinkActive}>Blog</Anchor></li>
          {/*<li><Anchor to="/stores" className={styles.headerLink}>Stories</Anchor></li>*/}
          <li><Anchor to="/projects" className={styles.headerLink}>Projects</Anchor></li>
          <li><Anchor to="/travel" className={styles.headerLink}>Travel</Anchor></li>
        </ul>
      </nav>
    </header>
    <nav className={styles.nav}>
      <Anchor to="/blog" className={styles.subnavlinkactive}>Blog</Anchor>
      <Anchor to="/blog/feed" className={styles.subnavLink}>Feed</Anchor>
      <Anchor to="/blog/tags" className={styles.subnavLink}>Tags</Anchor>
    </nav>
    <article className={styles.wrapper}>
      <section>
        <h2>
          Welcome to my blog. I write about a lot of different things, I suggest checking out my <Link to="/blog/tags">tags</Link>.
        </h2>
      </section>
    </article>
  </div>
);


export default Blog;
