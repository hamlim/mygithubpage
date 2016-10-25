webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _components = __webpack_require__(177);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var landingcss = __webpack_require__(178);
	
	if (document.getElementById('index')) {
	  _reactDom2.default.render(_react2.default.createElement(_components.Header, null), document.getElementsByClassName('headerMount-index')[0]);
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
	  _reactDom2.default.render(_react2.default.createElement(_components.Footer, null), document.getElementById('footerMount-blog'));
	}

/***/ },

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Footer = exports.Header = exports.Nav = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Nav = exports.Nav = function Nav(props) {
		return _react2.default.createElement(
			"ul",
			{ "data-css-nav-links": true, className: "nav--links ul--nostyle ul--inline" },
			_react2.default.createElement(
				"li",
				{ "data-css-li-inline": true, className: "li--inline" },
				_react2.default.createElement(
					"a",
					{ href: "./index.html", "data-css-link-active": props.index, "data-css-link": true, className: "link" },
					"Portfolio"
				)
			),
			_react2.default.createElement(
				"li",
				{ "data-css-li-inline": true, className: "li--inline" },
				_react2.default.createElement(
					"a",
					{ href: "./resume.html", "data-css-link-active": props.resume, "data-css-link": true, className: "link" },
					"Resume"
				)
			),
			_react2.default.createElement(
				"li",
				{ "data-css-li-inline": true, className: "li--inline" },
				_react2.default.createElement(
					"a",
					{ href: "./archive.html", "data-css-link-active": props.blog, "data-css-link": true, className: "link" },
					"Blog"
				)
			)
		);
	};
	
	var Header = exports.Header = function Header(props) {
		return _react2.default.createElement(
			"div",
			{ className: "header--siblings" },
			_react2.default.createElement(
				"h1",
				{ className: "header--title clr--blue" },
				"Matt Hamlin"
			),
			props.children
		);
	};
	
	var Footer = exports.Footer = function Footer(props) {
		return _react2.default.createElement(
			"div",
			{ "data-css-container": true, "data-css-footer-nav": true },
			_react2.default.createElement(
				"div",
				{ "data-css-chip": true },
				"\xA9 ",
				_react2.default.createElement(
					"a",
					{ href: "https://matthamlin.me", "data-css-link-article": true },
					"Matt Hamlin"
				),
				" 2016"
			),
			_react2.default.createElement(
				"div",
				null,
				_react2.default.createElement(
					"span",
					{ "data-css-chip": true },
					_react2.default.createElement("a", { href: "https://twitter.com/intent/tweet?&text=Hey+@immatthamlin", "data-css-link-article": true, "data-css-emoji": "twitter", title: "Tweet Me" })
				),
				_react2.default.createElement(
					"span",
					{ "data-css-chip": true },
					_react2.default.createElement("a", { href: "sms:+14252100980", "data-css-link-article": true, "data-css-emoji": "phone", title: "Text Me" })
				),
				_react2.default.createElement(
					"span",
					{ "data-css-chip": true },
					_react2.default.createElement("a", { href: "mailto:matthewjameshamlin@gmail.com", "data-css-link-article": true, "data-css-emoji": "email", title: "Email Me" })
				),
				_react2.default.createElement(
					"span",
					{ "data-css-chip": true },
					_react2.default.createElement("a", { href: "https://m.me/immatthamlin", "data-css-link-article": true, "data-css-emoji": "fbm", title: "Message Me" })
				)
			),
			_react2.default.createElement(
				"div",
				{ "data-css-chip": true },
				_react2.default.createElement(
					"a",
					{ href: "https://twitter.com/immatthamlin", "data-css-link-article": true },
					"Twitter"
				)
			)
		);
	};

/***/ },

/***/ 178:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=landing.js.map