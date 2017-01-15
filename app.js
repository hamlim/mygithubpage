import React from 'react';
import ReactDOM from 'react-dom';
import { Nav, Header, Footer, AllPosts, TagApp, PostListing } from './assets/js/src/components';
// holidays
// import emojiCursor from './Assets/js/src/emojiCursor';
// emojiCursor();
var landingcss = require('./assets/css/central.css');

if (document.getElementById('index')) {
  ReactDOM.render(<Header><h2 className="header--subtitle clr--green">Portfolio</h2></Header>, document.getElementsByClassName('headerMount-index')[0]);
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
  window.fetch('/assets/json/posts.json').then(function (response) {
    return response.json().then((jsonResponse) => {
      ReactDOM.render(
        <PostListing posts={jsonResponse} />,
        document.getElementById('listingMount-blog')
      );
    });
  });
  ReactDOM.render(<Footer />, document.getElementById('footerMount-blog'));
}

if (document.getElementById('monthly')) {
  ReactDOM.render(<Header><h2 className="header--subtitle clr--green">Blog Archive</h2></Header>, document.getElementsByClassName('headerMount-blog')[0]);
}


if (document.getElementById('tags')) {
  ReactDOM.render(<Header><h2 className="header--subtitle">Blog Tags</h2></Header>, document.getElementsByClassName('headerMount-tags')[0]);
  ReactDOM.render(<Nav tags />, document.getElementById('navMount-tags'));
  window.fetch('/assets/json/tags.json').then(function (response) {
    return response.json().then((jsonResponse) => {
      ReactDOM.render(
        <TagApp taggedPosts={jsonResponse} />,
        document.getElementById('pageMount')
      );
    });
  });
  ReactDOM.render(<Footer />, document.getElementById('footerMount-tags'));
}
