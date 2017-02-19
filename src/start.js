import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Home from './components/home/home';
import Projects from './components/projects';
import Blog from './components/blog';
import BlogChildren from './components/blog/children';

import Tags from './components/blog/tags';
import Feed from './components/blog/feed';
import Post from './components/blog/post';

import './start.css';

const Website = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/blog" component={BlogChildren}>
        <IndexRoute component={Blog}/>
        <Route path="/blog/tags" component={Tags}/>
        <Route path="/blog/feed" component={Feed} />
      </Route>
      <Route path="/post/:slug" component={Post}/>
    </Router>
  )
};

export default Website;
