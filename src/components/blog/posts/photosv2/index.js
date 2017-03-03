import React, {Component} from 'react';
import Helmet from "react-helmet";

import Lightbox from '../lightbox';

import styles from './photosv2.css';

const images = [
  {
    img: '/assets/images/posts/photosv2/1drive.jpg',
    lowres: '/assets/images/posts/photosv2/1drive lowres.jpg',
    caption: 'Drive',
    title: 'Drive',
    text: 'The day started with breakfast, then after that we started the drive down to Rhode Island.'
  },
  {
    img: '/assets/images/posts/photosv2/2harborview.jpg',
    lowres: '/assets/images/posts/photosv2/2harborview lowres.jpg',
    caption: 'Harbor View',
    title: 'Harbor View',
    text: 'After the drive back, we grabbed a quick bite to eat at Anna\'s Taqueria. Once we finished lunch we dropped off the rental car just North of Alston, and walked to the nearest green line stop on the B branch. We took the green line all the way to Copley place and walked around the Prudential center and Copley mall a bit. We grabbed a cup of cold brew from starbucks, and then hopped back on the T to head down to Government Center. From there we walked straight down to the harbor.'
  },
  {
    img: '/assets/images/posts/photosv2/3harbor.jpg',
    lowres: '/assets/images/posts/photosv2/3harbor lowres.jpg',
    caption: 'Harbor',
    title: 'Harbor',
    text: 'This photo was also taken walking down Beacon Street between Coolidge Corner and Hawes Street Green line stops.'
  },
  {
    img: '/assets/images/posts/photosv2/4viewofthecity.jpg',
    lowres: '/assets/images/posts/photosv2/4viewofthecity lowres.jpg',
    caption: 'View of the City',
    title: 'View of the City',
    text: 'We walked down the long wharf and a little bit down along the water, then doubled back through a small alley getting back to where we first hit the harbor.'
  },
  {
    img: '/assets/images/posts/photosv2/5downtown2.jpg',
    lowres: '/assets/images/posts/photosv2/5downtown2 lowres.jpg',
    caption: 'Downtown',
    title: 'Downtown',
    text: ''
  },
  {
    img: '/assets/images/posts/photosv2/7quincymarket.jpg',
    lowres: '/assets/images/posts/photosv2/7quincymarket lowres.jpg',
    caption: 'Quincy Market',
    title: 'Quincy Market',
    text: ''
  },
  {
    img: '/assets/images/posts/photosv2/8tallbuilding.jpg',
    lowres: '/assets/images/posts/photosv2/8tallbuilding lowres.jpg',
    caption: 'Downtown Views',
    title: 'Downtown Views',
    text: ''
  },
  {
    img: '/assets/images/posts/photosv2/10common.jpg',
    lowres: '/assets/images/posts/photosv2/10common lowres.jpg',
    caption: 'The Common',
    title: 'The Common',
    text: ''
  },
  {
    img: '/assets/images/posts/photosv2/11lake.jpg',
    lowres: '/assets/images/posts/photosv2/11lake lowres.jpg',
    caption: 'The Lake',
    title: 'The Lake',
    text: ''
  },
  {
    img: '/assets/images/posts/photosv2/12fireescape.jpg',
    lowres: '/assets/images/posts/photosv2/12fireescape lowres.jpg',
    caption: 'Fire Escape',
    title: 'Fire Escape',
    text: ''
  },
  {
    img: '/assets/images/posts/photosv2/13sushi.jpg',
    lowres: '/assets/images/posts/photosv2/13sushi lowres.jpg',
    caption: 'Sushi',
    title: 'Sushi',
    text: ''
  },
  {
    img: '/assets/images/posts/photosv2/14sushiwithdad.jpg',
    lowres: '/assets/images/posts/photosv2/14sushiwithdad lowres.jpg',
    caption: 'Sushi with Dad',
    title: 'Sushi with Dad',
    text: ''
  }
]

class Photosv2 extends Component {
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
      <Helmet
        link={[
          {"rel": "icon", "href": "/assets/camera.png"}
        ]}
      />
      <header>
        <h3 className={styles.h3}>Photos v2</h3>
        <p>
          This weekend my dad came out to visit me after a business trip to Rhode Island, we decided to take the T in to the heart of the city and
          walk down to the harbor and back through the Common.
        </p>
      </header>
      <Lightbox images={images} />
    </article>
  )
};

export default Photosv2;