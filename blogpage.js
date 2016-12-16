import React from 'react';
import { render } from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import Home from './Assets/js/Home';
import Resume from './Assets/js/Resume';
import BlogArchive from './Assets/js/BlogArchive';
import Posts from './Assets/js/Posts';
import Post from './Assets/js/Post';

render(
  <Router history={browserHistory}>
    <indexRoute component={Home} />
    <Route to="/resume" component={Resume} />
    <Route to="/archive" component={BlogArchive} />
    <Route to="/Posts" component={Posts} >
      <Route to="/Posts/:year/:month/:title" component={Post} />
    </Route>
  </Router>,
  doucment.getElementById('app-mount')
);


