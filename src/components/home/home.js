import React from 'react';
import Helmet from "react-helmet";
import Anchor from '../anchor';

import styles from './home.css';

const Link = ({to, className, children}) => (
  <Anchor to={to} className={className ? className : styles.link}>{children}</Anchor>
);

class Home extends React.Component {
  componentDidMount = () => {
    document.getElementsByTagName('html')[0].classList.add('home-html');
  }
  componentWillUnmount = () => {
    document.getElementsByTagName('html')[0].classList.remove('home-html');
  }
  render = () => (
    <div className="Home">
      <Helmet title="Home" />
      <div className={styles.hibar}></div>
      <header className={styles.header}>
        <h1><Anchor to="/" className={styles.name}>Matt Hamlin</Anchor></h1>
        <nav className={styles.headerNav}>
          <ul className={styles.headerList}>
            <li><Anchor to="/blog" className={styles.headerLink}>Blog</Anchor></li>
            {/*<li><Anchor to="/stores" className={styles.headerLink}>Stories</Anchor></li>*/}
            <li><Anchor to="/projects" className={styles.headerLink}>Projects</Anchor></li>
            <li><Anchor to="/travel" className={styles.headerLink}>Travel</Anchor></li>
          </ul>
        </nav>
      </header>
      <article className={styles.wrapper}>
        <section className={styles.content}>
          <h2 className={styles.lead}>
            Hello 👋🏼.
            <br />
            I am Matt Hamlin, a web developer, web designer, and I also tend to write a bit as well.
          </h2>
          <p className={styles.second}>
            I make small <Link to="/projects">side projects</Link> of all kinds in my free time, and work
            with some pretty smart people at Wayfair currently.
          </p>
          <p className={styles.third}>
            I also write quite a bit about a ton of things like <Link to="/blog/tags/#development">Development</Link>
          , <Link to="/blog/tags/#daily">Daily</Link> content, as well as a lot of <Link to="/blog/tags/#random">Random</Link> things.
          </p>
          <p className={styles.fourth}>
            I recently worked on a new and exciting project called <a className={styles.link} href="https://goexploring.today/Future-Grid">Future-Grid</a>. Check it out 
            if you are interested in CSS grid frameworks!
          </p>
        </section>
      </article>
      <footer className={styles.footer}>
        <p className={styles.footerText}>Find me on: <a href="https://twitter.com/immatthamlin" className={styles.footerLink}>Twitter</a> or on <a href="https://snapchat.com/add/immatthamlin" className={styles.footerLink}>Snapchat</a></p>
      </footer>
      <div className={styles.lowbar}></div>
    </div>
  );
}

export default Home;
