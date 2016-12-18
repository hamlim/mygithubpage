import React from 'react';
import { render } from 'react-dom'
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import PostHome from './Assets/js/postHome';
import MonthListing from './Assets/js/monthListing';


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


