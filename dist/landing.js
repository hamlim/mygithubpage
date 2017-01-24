webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _components = __webpack_require__(172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// holidays
	// import emojiCursor from './Assets/js/src/emojiCursor';
	// emojiCursor();
	var landingcss = __webpack_require__(251);
	
	if (document.getElementById('index')) {
	  _reactDom2.default.render(_react2.default.createElement(
	    _components.Header,
	    null,
	    _react2.default.createElement(
	      'h2',
	      { className: 'header--subtitle clr--green' },
	      'Portfolio'
	    )
	  ), document.getElementsByClassName('headerMount-index')[0]);
	  _reactDom2.default.render(_react2.default.createElement(_components.Nav, { index: true }), document.getElementById('navMount-index'));
	  _reactDom2.default.render(_react2.default.createElement(_components.Footer, null), document.getElementById('footerMount-index'));
	}
	if (document.getElementById('resume')) {
	  _reactDom2.default.render(_react2.default.createElement(
	    _components.Header,
	    null,
	    _react2.default.createElement(
	      'h2',
	      { className: 'header--subtitle clr--green' },
	      'Resume'
	    )
	  ), document.getElementsByClassName('headerMount-resume')[0]);
	  _reactDom2.default.render(_react2.default.createElement(_components.Nav, { resume: true }), document.getElementById('navMount-resume'));
	  _reactDom2.default.render(_react2.default.createElement(_components.Footer, null), document.getElementById('footerMount-resume'));
	}
	if (document.getElementById('blog')) {
	  _reactDom2.default.render(_react2.default.createElement(
	    _components.Header,
	    null,
	    _react2.default.createElement(
	      'h2',
	      { className: 'header--subtitle clr--green' },
	      'Blog Archive'
	    )
	  ), document.getElementsByClassName('headerMount-blog')[0]);
	  _reactDom2.default.render(_react2.default.createElement(_components.Nav, { blog: true }), document.getElementById('navMount-blog'));
	  window.fetch('/assets/json/posts.json').then(function (response) {
	    return response.json().then(function (jsonResponse) {
	      _reactDom2.default.render(_react2.default.createElement(_components.PostListing, { posts: jsonResponse }), document.getElementById('listingMount-blog'));
	    });
	  });
	
	  _reactDom2.default.render(_react2.default.createElement(_components.Footer, null), document.getElementById('footerMount-blog'));
	}
	
	if (document.getElementById('monthly')) {
	  _reactDom2.default.render(_react2.default.createElement(
	    _components.Header,
	    null,
	    _react2.default.createElement(
	      'h2',
	      { className: 'header--subtitle' },
	      'Blog Archive'
	    )
	  ), document.getElementsByClassName('headerMount-blog')[0]);
	}
	
	if (document.getElementById('tags')) {
	  _reactDom2.default.render(_react2.default.createElement(
	    _components.Header,
	    null,
	    _react2.default.createElement(
	      'h2',
	      { className: 'header--subtitle' },
	      'Blog Tags'
	    )
	  ), document.getElementsByClassName('headerMount-tags')[0]);
	  _reactDom2.default.render(_react2.default.createElement(_components.Nav, { tags: true }), document.getElementById('navMount-tags'));
	  window.fetch('/assets/json/tags.json').then(function (response) {
	    return response.json().then(function (jsonResponse) {
	      (0, _reactDom.render)(_react2.default.createElement(_components.TagApp, { taggedPosts: jsonResponse }), document.getElementById('pageMount'));
	    });
	  });
	  _reactDom2.default.render(_react2.default.createElement(_components.Footer, null), document.getElementById('footerMount-tags'));
	}

/***/ }
]);
//# sourceMappingURL=landing.js.map