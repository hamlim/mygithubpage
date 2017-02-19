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
  <div className="Blog">
    <Helmet title="Blog" />
    <Header page="Blog" />
    <Subnav variation="Blog"/>
      <article className={styles.wrapper}>
        <section>
          <h2 className={styles.lead}>
            Welcome to my blog. I write about a lot of different things, I suggest checking out my <Link to="/blog/tags">tags</Link>.
          </h2>
        </section>
      </article>
  </div>
);


export default Blog;
