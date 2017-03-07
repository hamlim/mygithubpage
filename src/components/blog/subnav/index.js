import React from 'react';

import styles from './styles.css';

import Anchor from '../../anchor';

const Subnav = ({page}) => {
  if (page === "Blog") {
    return (
      <nav className={styles.nav}>
        <Anchor to="/blog" className={styles.subnavlinkactive}>Blog</Anchor>
        <Anchor to="/blog/feed" className={styles.subnavLink}>Feed</Anchor>
        <Anchor to="/blog/tags" className={styles.subnavLink}>Tags</Anchor>
      </nav>
    )
  } else if (page === "Feed") {
    return (
      <nav className={styles.nav}>
        <Anchor to="/blog" className={styles.subnavLink}>Blog</Anchor>
        <Anchor to="/blog/feed" className={styles.subnavlinkactive}>Feed</Anchor>
        <Anchor to="/blog/tags" className={styles.subnavLink}>Tags</Anchor>
      </nav>
    )
  } else if (page === "Tags") {
    return (
      <nav className={styles.nav}>
        <Anchor to="/blog" className={styles.subnavLink}>Blog</Anchor>
        <Anchor to="/blog/feed" className={styles.subnavLink}>Feed</Anchor>
        <Anchor to="/blog/tags" className={styles.subnavlinkactive}>Tags</Anchor>
      </nav>
    )
  }
};

export default Subnav;
