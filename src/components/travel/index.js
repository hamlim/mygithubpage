import React, {Component} from 'react';

import Header from '../header/header';
import styles from './travel.css';



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
              <p>The United States is my home country and one that I have spent a large amount of time travelling to many different states.</p>
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
            </section>
            <NewZealand />
          </article>
        )
      default:
        return (
          <article className={styles.wrapper}>
            <Header page="Travel" />
            <h2>any</h2>
          </article>
        )
    }
  }
};

export default Travel;