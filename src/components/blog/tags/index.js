import React, {Component} from 'react';
import Helmet from "react-helmet";
import 'whatwg-fetch';

import Anchor from '../../anchor';
import Header from '../../header/header';
import TagApp from './tagapp';

import styles from './tags.css';
import Subnav from '../subnav';

const Link = ({to, children}) => (
  <Anchor to={to} className={styles.link}>{children}</Anchor>
);

class Tags extends Component {
  constructor = (props) => {
    this.super(props);
    this.setState = this.setState.bind(this);
  }
  state = {
    feed: []
  }
  componentDidMount = () => {
    fetch('/assets/json/posts.json').then(r => {
      return r.json();
    }).then(feed => {
      this.setState({feed});
    }).catch(err => console.warn(err));
  }

  render = () => {
    let feedLengthBool = this.state.feed.length > 0;
    return (
      <section className="Tags">
        <Helmet title="Tags" />
        <Header />
        <Subnav page="Tags"/>
        <div className={styles.wrapper}>
          <h2>Tags:</h2>
          {feedLengthBool ? (
            <TagApp feed={this.state.feed} />
          ) : (
            <div className={styles.loading}></div>
          )}
        </div>
      </section>
    )
  }
};

export default Tags;
