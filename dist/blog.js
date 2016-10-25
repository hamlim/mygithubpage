webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _blog_components = __webpack_require__(172);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var post_css = __webpack_require__(173);
	
	var DOCID = document.documentElement.getAttribute('data-post-id');
	
	switch (DOCID) {
	  case 1:
	    _reactDom2.default.render(_react2.default.createElement(_blog_components.PostHeader, { title: 'something', subtitle: 'something', timestamp: '2016-10-24', month: 'October', datestring: '24th, 2016', tag: 'Personal' }), document.getElementById('headerMount'));
	    break;
	}

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PostFooter = exports.PostHeader = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var PostHeader = exports.PostHeader = function PostHeader(props) {
	  return _react2.default.createElement(
	    "div",
	    { className: "blog-header" },
	    _react2.default.createElement(
	      "h1",
	      { className: "title" },
	      props.title
	    ),
	    _react2.default.createElement(
	      "h3",
	      { className: "subtitle" },
	      props.subtitle
	    ),
	    _react2.default.createElement(
	      "p",
	      { className: "publish-date" },
	      "Published ",
	      _react2.default.createElement(
	        "time",
	        { dateTime: props.timestamp },
	        _react2.default.createElement(
	          "a",
	          { href: "/", className: "link" },
	          props.month
	        ),
	        " ",
	        props.datestring
	      )
	    ),
	    _react2.default.createElement(
	      "p",
	      { className: "tags" },
	      _react2.default.createElement(
	        "a",
	        { className: "tag", href: "./tags/" + props.tag },
	        props.tag
	      )
	    )
	  );
	};
	
	var PostFooter = exports.PostFooter = function PostFooter(props) {
	  return _react2.default.createElement(
	    "div",
	    { className: "blog-footer" },
	    _react2.default.createElement(
	      "div",
	      { className: "chip" },
	      "\xA9 ",
	      _react2.default.createElement(
	        "a",
	        { href: "https://matthamlin.me", className: "link" },
	        "Matt Hamlin"
	      ),
	      " 2016"
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "wrapper" },
	      _react2.default.createElement(
	        "span",
	        { className: "chip" },
	        _react2.default.createElement("a", { href: "https://twitter.com/intent/tweet?&text=Hey+@immatthamlin", className: "link", "data-css-emoji": "twitter", title: "Tweet Me" })
	      ),
	      _react2.default.createElement(
	        "span",
	        { className: "chip" },
	        _react2.default.createElement("a", { href: "sms:+14252100980", className: "link", "data-css-emoji": "phone", title: "Text Me" })
	      ),
	      _react2.default.createElement(
	        "span",
	        { className: "chip" },
	        _react2.default.createElement("a", { href: "mailto:matthewjameshamlin@gmail.com", className: "link", "data-css-emoji": "email", title: "Email Me" })
	      ),
	      _react2.default.createElement(
	        "span",
	        { className: "chip" },
	        _react2.default.createElement("a", { href: "https://m.me/immatthamlin", className: "link", "data-css-emoji": "fbm", title: "Message Me" })
	      )
	    ),
	    _react2.default.createElement(
	      "div",
	      { className: "chip" },
	      _react2.default.createElement(
	        "a",
	        { href: "/archive", className: "link" },
	        "Archive"
	      )
	    )
	  );
	};

/***/ },

/***/ 173:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=blog.js.map