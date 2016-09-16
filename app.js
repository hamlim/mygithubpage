var css = require("!style!css!sass!./assets/css/src/main.scss");
var postcss = require("!style!css!sass!./assets/css/src/posts.scss");

import React from 'react'
import ReactDOM from 'react-dom'
import { Header, Article, Footer } from './assets/js/components'



ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<Main />, document.getElementById('main'));
// ReactDOM.render(<Footer />, document.getElementById('footer'));