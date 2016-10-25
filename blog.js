import React from 'react';
import ReactDOM from 'react-dom';
import { PostHeader, PostFooter } from './assets/js/src/blog_components';
var post_css = require('./assets/css/posts.css');


const DOCID = document.documentElement.getAttribute('data-post-id');

switch (DOCID) {
  case 1:
    ReactDOM.render(
      <PostHeader title="something" subtitle="something" timestamp="2016-10-24" month="October" datestring="24th, 2016" tag="Personal" />,
      document.getElementById('headerMount')
    );
    break;
}
