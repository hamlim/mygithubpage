webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _components = __webpack_require__(172);
	
	var _reactlightbox = __webpack_require__(173);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var post_css = __webpack_require__(174);
	
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
	      { title: 'The American Fall of 2016' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-11-09' },
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
	  case '5':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'We\'re Not Fucked*', subtitle: '*(completely)' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-11-09' },
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
	  case '6':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Don\'t Force It' },
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
	  case '7':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Recent Work' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-11-11' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'November'
	        ),
	        ' 11th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '8':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'That First Fucking Step' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-11-18' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'November'
	        ),
	        ' 18th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '9':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Links' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-11-19' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'November'
	        ),
	        ' 19th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '10':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'The Future of Consumer VR' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-11-20' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'November'
	        ),
	        ' 20th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    var imagearray = [{
	      img: '/assets/images/posts/daydream/Photos/0.jpg',
	      caption: 'The box it came in'
	    }, {
	      img: '/assets/images/posts/daydream/Photos/1.jpg',
	      caption: 'The Daydream View'
	    }, {
	      img: '/assets/images/posts/daydream/Photos/2.jpg',
	      caption: 'Another angle of the Daydream View'
	    }, {
	      img: '/assets/images/posts/daydream/Photos/3.jpg',
	      caption: 'The front flap of the Daydream View'
	    }, {
	      img: '/assets/images/posts/daydream/Photos/4.jpg',
	      caption: 'The Daydream View controller'
	    }, {
	      img: '/assets/images/posts/daydream/Photos/5.jpg',
	      caption: 'The Daydream View controller in the Daydream View for storage'
	    }];
	    _reactDom2.default.render(_react2.default.createElement(_reactlightbox.Lightbox, { images: imagearray, title: 'Daydream View' }), document.getElementById('reactLightboxMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '11':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Government is Broken' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-11-20' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'November'
	        ),
	        ' 20th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '12':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Quit Complaining' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-11-24' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'November'
	        ),
	        ' 24th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	}

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Lightbox = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// 	props.images => [{url: 'something.jpg', caption: 'caption'}, ...]
	
	var Lightbox = exports.Lightbox = function Lightbox(props) {
		var imgWrappers = props.images.map(function (obj, index) {
			return _react2.default.createElement(
				"div",
				{ className: "LB-wrapper", key: index },
				_react2.default.createElement(
					"a",
					{ href: "#LB_target_" + index, className: "escape" },
					_react2.default.createElement("img", { id: "LB_" + index, src: obj.img, alt: obj.caption, className: "LB-image" })
				),
				_react2.default.createElement(
					"small",
					{ className: "LB-caption" },
					obj.caption
				)
			);
		});
		var portalImages = props.images.map(function (obj, index) {
			return _react2.default.createElement(
				"a",
				{ href: "#LB_" + index, className: "LB-target-wrapper escape", id: "LB_target_" + index, key: index },
				_react2.default.createElement(
					"div",
					null,
					_react2.default.createElement("img", { src: obj.img, alt: obj.caption, className: "LB-target-img" }),
					_react2.default.createElement(
						"small",
						{ className: "LB-target-caption" },
						obj.caption
					)
				)
			);
		});
		return _react2.default.createElement(
			"section",
			{ className: "LB-component" },
			_react2.default.createElement(
				"h2",
				{ className: "LB-title" },
				props.title
			),
			imgWrappers,
			portalImages
		);
	};

/***/ }

});
//# sourceMappingURL=blog.js.map