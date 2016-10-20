import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from './assets/js/src/components';
var css = require('./assets/css/main.css');
// var post_css = require('./assets/css/posts.css');



if (document.getElementById('navMount-index')) {
  ReactDOM.render(<Nav index />, document.getElementById('navMount-index'));
}
if (document.getElementById('navMount-resume')) {
  ReactDOM.render(<Nav resume />, document.getElementById('navMount-resume'));
}
if (document.getElementById('navMount-blog')) {
  ReactDOM.render(<Nav blog />, document.getElementById('navMount-blog'));
}
