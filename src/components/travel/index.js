import React, {Component} from 'react';

import Header from '../header/header';
import styles from './travel.css';

import Anchor from '../anchor';

import USA from './usa';
import NewZealand from './nz';


class Travel extends Component {
  constructor = (props) => {
    this.super(props);
    this.setState = this.setState.bind(this);
  }

  state = {
    location: 'Click over a location to get more information.'
  }

  handleClickOnLocation = (location = 'Click a location to get more information.') => (
    this.setState({location})
  )

  render = () => {
    switch (this.props.params.location) {
      case 'USA':
        return (
          <article className={styles.wrapper}>
            <Header page="Travel" />
            <section className={styles.section}>
              <h2>United States of America</h2>
              <p>The United States is my home country and one that I have spent a large amount of time traveling to many different states.</p>
              <h5 id="location">{this.state.location}</h5>
            </section>
            <USA handleSelection={this.handleClickOnLocation} />
          </article>
        )
      case 'NewZealand':
        return (
          <article className={styles.wrapper}>
            <Header page="Travel" />
            <section className={styles.section}>
              <h2>New Zealand</h2>
              <p className="big">More coming soon!</p>
            </section>
            <NewZealand />
          </article>
        )
      default:
        return (
          <article className={styles.wrapper}>
            <Header page="Travel" />
            <section className={styles.section}>
              <p className="big">Welcome to a small experiment on my website. I really want a cool way to share some of my stories and experiences while traveling around the world.</p>
              <p className="big">I have decided to start this off with a simple map of the USA, that you can reach by going to <Anchor className={styles.link} to="/travel/USA">here</Anchor>. This is still early on in this 
              experiment so don't expect too much.</p>
            </section>
          </article>
        )
    }
  }
};

export default Travel;