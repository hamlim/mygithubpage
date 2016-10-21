var css = require('./assets/css/main.css');
import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Header } from './assets/js/src/components';

// var post_css = require('./assets/css/posts.css');



if (document.getElementById('index')) {
  ReactDOM.render(<Header/>, document.getElementsByClassName('headerMount-index')[0]);
  ReactDOM.render(<Nav index />, document.getElementById('navMount-index'));
}
if (document.getElementById('resume')) {
  ReactDOM.render(<Header><h2 className="header--subtitle clr--green">Resume</h2></Header>, document.getElementsByClassName('headerMount-resume')[0]);
  ReactDOM.render(<Nav resume />, document.getElementById('navMount-resume'));
}
if (document.getElementById('blog')) {
  ReactDOM.render(<Header><h2 className="header--subtitle clr--green">Blog Archive</h2></Header>, document.getElementsByClassName('headerMount-blog')[0]);
  ReactDOM.render(<Nav blog />, document.getElementById('navMount-blog'));
}
