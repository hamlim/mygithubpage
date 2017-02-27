import React, {Component} from 'react';

import styles from './photosv1.css';

class Photosv1 extends Component {
  constructor = (props) => {
    this.super(props);
    this.setState = this.setState.bind(this);
  }

  componentDidMount = () => {
    window.document.querySelector('html').classList.add('setting');
  }

  componentWillUnmount = () => {
    window.document.querySelector('html').classList.remove('setting');
  }

  render = () => (
    <article className="post">
      <h3>Photos v1</h3>
    </article>
  )
};

export default Photosv1;