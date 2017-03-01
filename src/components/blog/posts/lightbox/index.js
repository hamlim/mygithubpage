import React, {Component} from 'react';

import styles from './lightbox.css';

class Lightbox extends Component {
  constructor = (props) => {
    this.super(props);
    this.setState = this.setState.bind(this);
  }
  state = {
    loadHighRes: false
  }

  componentDidMount = () => {
    this.setState({
      loadHighRes: true
    });
  }

  render = () => {
    let {images} = this.props;
    console.log(images);
    let thumbnails = images.map((image, index) => (
      <div className={styles.lightboxcontent} key={index}>
        <h4 className={styles.h4}>{image.title}</h4>
        <p>{image.text}</p>
        <figure className={styles.lightboxwrapper}>
          <a href={"#LB_target_" + index} className={styles.escape}>
            <img id={"LB_" + index} src={image.lowres} alt={image.caption} className={styles.lightboximage} />
          </a>
          <figcaption className={styles.lightboxcaption}>{image.caption}</figcaption>
        </figure>
      </div>
    ));
    return (
      <section className={styles.lightboxComponent}>
        {thumbnails}
        {this.state && this.state.loadHighRes ? (
          <section>
            {images.map((image, index) => (
              <a href={"#LB_" + index} className={`${styles.lightboxtargetWrapper} ${styles.escape}`} id={"LB_target_" + index} key={index}>
                <figure className={styles.lightboxtarge}>
                  <img src={image.img} alt={image.caption} className={styles.lightboxtargetImg} />
                  <figcaption className={styles.lightboxtargetCaption}>{image.caption}</figcaption>
                </figure>
              </a>
            ))}
          </section>
        ) : null}
      </section>
    )
  }
}

export default Lightbox;