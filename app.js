import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Header, Footer, PostHeader } from './assets/js/src/components';




if (document.getElementById('index')) {
  ReactDOM.render(<Header/>, document.getElementsByClassName('headerMount-index')[0]);
  ReactDOM.render(<Nav index />, document.getElementById('navMount-index'));
  ReactDOM.render(<Footer />, document.getElementById('footerMount-index'));
}
if (document.getElementById('resume')) {
  ReactDOM.render(<Header><h2 className="header--subtitle clr--green">Resume</h2></Header>, document.getElementsByClassName('headerMount-resume')[0]);
  ReactDOM.render(<Nav resume />, document.getElementById('navMount-resume'));
  ReactDOM.render(<Footer />, document.getElementById('footerMount-resume'));
}
if (document.getElementById('blog')) {
  ReactDOM.render(<Header><h2 className="header--subtitle clr--green">Blog Archive</h2></Header>, document.getElementsByClassName('headerMount-blog')[0]);
  ReactDOM.render(<Nav blog />, document.getElementById('navMount-blog'));
  ReactDOM.render(<Footer />, document.getElementById('footerMount-blog'));
}
