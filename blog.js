import React from 'react';
import ReactDOM from 'react-dom';
import { PostHeader, PostFooter } from './assets/js/src/components';
import { Lightbox } from './assets/js/src/reactlightbox';
import { ColorCards } from './assets/js/src/colorcards';
var post_css = require('./assets/css/central.css');

const DOCID = document.body.getAttribute('data-post-id');

switch (DOCID) {
  case '1':
    ReactDOM.render(
      <PostHeader title="something" subtitle="something" timestamp="2016-10-24" month="October" datestring="24th, 2016" tag="Personal" />,
      document.getElementById('headerMount')
    );
    break;
  case '2':
    ReactDOM.render(
      <PostHeader title="demo" subtitle="Test">
        <time dateTime="2016-11-10"><a href="./" >November</a> 10th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '3':
    ReactDOM.render(
      <PostHeader title="I Voted">
        <time datetime="2016-11-08"><a href="./" >November</a> 8th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '4':
    ReactDOM.render(
      <PostHeader title="The American Fall of 2016">
        <time dateTime="2016-11-09"><a href="./" >November</a> 9th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '5':
    ReactDOM.render(
      <PostHeader title="We're Not Fucked*" subtitle="*(completely)">
        <time dateTime="2016-11-09"><a href="./" >November</a> 10th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '6':
    ReactDOM.render(
      <PostHeader title="Don't Force It">
        <time dateTime="2016-11-10"><a href="./" >November</a> 10th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '7':
    ReactDOM.render(
      <PostHeader title="Recent Work">
        <time dateTime="2016-11-11"><a href="./" >November</a> 11th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '8':
    ReactDOM.render(
      <PostHeader title="That First Fucking Step">
        <time dateTime="2016-11-18"><a href="./" >November</a> 18th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '9':
    ReactDOM.render(
      <PostHeader title="Links">
        <time dateTime="2016-11-19"><a href="./" >November</a> 19th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '10':
    ReactDOM.render(
      <PostHeader title="The Future of Consumer VR">
        <time dateTime="2016-11-20"><a href="./" >November</a> 20th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    let imagearray = [
      {
        img: '/assets/images/posts/daydream/Photos/0.jpg',
        caption: 'The box it came in'
      },
      {
        img: '/assets/images/posts/daydream/Photos/1.jpg',
        caption: 'The Daydream View'
      },
      {
        img: '/assets/images/posts/daydream/Photos/2.jpg',
        caption: 'Another angle of the Daydream View'
      },
      {
        img: '/assets/images/posts/daydream/Photos/3.jpg',
        caption: 'The front flap of the Daydream View'
      },
      {
        img: '/assets/images/posts/daydream/Photos/4.jpg',
        caption: 'The Daydream View controller'
      },
      {
        img: '/assets/images/posts/daydream/Photos/5.jpg',
        caption: 'The Daydream View controller in the Daydream View for storage'
      }
    ];
    ReactDOM.render(
      <Lightbox images={imagearray} title="Daydream View" />,
      document.getElementById('reactLightboxMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '11':
    ReactDOM.render(
      <PostHeader title="Government is Broken">
        <time dateTime="2016-11-20"><a href="./" >November</a> 20th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '12':
    ReactDOM.render(
      <PostHeader title="Quit Complaining">
        <time dateTime="2016-11-24"><a href="./" >November</a> 24th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '13':
    ReactDOM.render(
      <PostHeader title="Color Cards">
        <time dateTime="2016-11-29"><a href="./" >November</a> 29th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    window.fetch('/assets/json/colors.json').then(function (response) {
      return response.json().then((jsonResponse) => {
        ReactDOM.render(
          <ColorCards colors={jsonResponse} />,
          document.getElementById('ColorCards')
        );
      });
    });
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '14':
    ReactDOM.render(
      <PostHeader title="November Recap">
        <time dateTime="2016-12-04"><a href="./" >December</a> 4th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '15':
    ReactDOM.render(
      <PostHeader title="CSS Feature Locks" subtitle="Wait what?">
        <time dateTime="2016-12-09"><a href="./" >December</a> 9th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
}
