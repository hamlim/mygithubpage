import React, {Component} from 'react';

import Lightbox from '../lightbox';

import styles from './photosv1.css';

const images = [
  {
    img: '/assets/images/posts/Photosv1/foggy_morning.jpg',
    lowres: '/assets/images/posts/Photosv1/foggy_morning lowres.jpg',
    caption: 'Foggy Morning',
    title: 'Foggy Morning',
    text: 'Taken while walking to work in the morning right off of Boylston Street. The fog was still covering over the top third of the taller buildings down near Copley Square.'
  },
  {
    img: '/assets/images/posts/Photosv1/sunny_roadway.jpg',
    lowres: '/assets/images/posts/Photosv1/sunny_roadway lowres.jpg',
    caption: 'Sunny Roadway',
    title: 'Sunny Roadway',
    text: 'This was taken Sunday afternoon walking down Beacon Street towards Fenway. I really love this small corner and it would be really cool to live in the building to the left.'
  },
  {
    img: '/assets/images/posts/Photosv1/green_sidewalks.jpg',
    lowres: '/assets/images/posts/Photosv1/green_sidewalks lowres.jpg',
    caption: 'Green Sidewalks',
    title: 'Green Sidewalks',
    text: 'This photo was also taken walking down Beacon Street between Coolidge Corner and Hawes Street Green line stops.'
  },
  {
    img: '/assets/images/posts/Photosv1/classic_apartment_buildings.jpg',
    lowres: '/assets/images/posts/Photosv1/classic_apartment_buildings lowres.jpg',
    caption: 'Classic Apartment Facades',
    title: 'Classic Apartment Facades',
    text: 'Some of the apartment buildings along Beacon Street are really cool, most are also very old as well and really only the interiors have been rebuilt recently.'
  },
  {
    img: '/assets/images/posts/Photosv1/beacon_street_buildings.jpg',
    lowres: '/assets/images/posts/Photosv1/beacon_street_buildings lowres.jpg',
    caption: 'Beacon Street Buildings',
    title: 'Beacon Street Buildings',
    text: 'There also happen to be quite a few churches along Beacon Street in all kinds and forms representing a lot of different religions and architectural patterns as well.'
  },
  {
    img: '/assets/images/posts/Photosv1/sunday_afternoon_breeze.jpg',
    lowres: '/assets/images/posts/Photosv1/sunday_afternoon_breeze lowres.jpg',
    caption: 'Sunday Afternoon Breeze',
    title: 'Sunday Afternoon Breeze',
    text: 'This was simply a photo taken from my desk chair looking out behind my apartment building while the warm Sunday breeze blows through the window.'
  }
]

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
      <header>
        <h3>Photos v1</h3>
        <p>
          The below photos were all taken on my Google Pixel XL with HDR+ mode on auto. I really love the camera on this phone so far, and I am really excited about
          the photos and videos I will be able to take with it!
        </p>
      </header>
      <Lightbox images={images} />
    </article>
  )
};

export default Photosv1;