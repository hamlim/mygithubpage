import React from 'react';
import ReactDOM from 'react-dom';
import { PostHeader, PostFooter } from './assets/js/src/components';
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
}
