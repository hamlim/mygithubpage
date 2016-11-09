webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _components = __webpack_require__(172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var post_css = __webpack_require__(173);
	
	var DOCID = document.body.getAttribute('data-post-id');
	
	switch (DOCID) {
	  case '1':
	    _reactDom2.default.render(_react2.default.createElement(_components.PostHeader, { title: 'something', subtitle: 'something', timestamp: '2016-10-24', month: 'October', datestring: '24th, 2016', tag: 'Personal' }), document.getElementById('headerMount'));
	    break;
	  case '2':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'demo', subtitle: 'Test' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-11-10' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'November'
	        ),
	        ' 10th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '3':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'I Voted' },
	      _react2.default.createElement(
	        'time',
	        { datetime: '2016-11-08' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'November'
	        ),
	        ' 8th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '4':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'The American Fall 2016' },
	      _react2.default.createElement(
	        'time',
	        { datetime: '2016-11-09' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'November'
	        ),
	        ' 9th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	}

/***/ }
]);
//# sourceMappingURL=blog.js.map