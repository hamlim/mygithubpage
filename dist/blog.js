webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(34);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _components = __webpack_require__(172);
	
	var _reactlightbox = __webpack_require__(243);
	
	var _colorcards = __webpack_require__(244);
	
	var _post = __webpack_require__(245);
	
	var _post2 = _interopRequireDefault(_post);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var post_css = __webpack_require__(251);
	
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
	  case '13':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Color Cards' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-11-29' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'November'
	        ),
	        ' 29th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    window.fetch('/assets/json/colors.json').then(function (response) {
	      return response.json().then(function (jsonResponse) {
	        _reactDom2.default.render(_react2.default.createElement(_colorcards.ColorCards, { colors: jsonResponse }), document.getElementById('ColorCards'));
	      });
	    });
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '14':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'November Recap' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-12-04' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'December'
	        ),
	        ' 4th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '15':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'CSS Feature Locks', subtitle: 'Wait what?' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-12-08' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'December'
	        ),
	        ' 8th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '16':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'CSS in JSX Limitations', subtitle: 'Wait what?' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-12-13' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'December'
	        ),
	        ' 13th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '17':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'The Macbook Pro' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-12-16' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'December'
	        ),
	        ' 16th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '18':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Paralysis' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-12-20' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'December'
	        ),
	        ' 20th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '19':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Drained' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-12-26' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'December'
	        ),
	        ' 26th, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'burnout' },
	        'Burnout'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '20':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: '2017' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2016-12-31' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'December'
	        ),
	        ' 31st, 2016'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'summary' },
	        'Summary'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '21':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'One' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-01' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 1st, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '22':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Two' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-02' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 2nd, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '23':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Three' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-03' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 3rd, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '24':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Four' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-04' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 4th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '25':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Five' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-05' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 5th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '26':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Social Networks' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-05' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 5th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.StyledFloatedQuoteContainer, null), document.getElementById('blockquote-container'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'social' },
	        'Social'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '27':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Six' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-06' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 6th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '28':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Seven' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-07' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 7th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '29':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Eight' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-08' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 8th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '30':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Nine' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-09' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 9th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '31':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Ten' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-10' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 10th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '32':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Eleven' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-11' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 11th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '33':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Twelve' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-12' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 12th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '34':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Thirteen' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-13' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 13th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '35':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Fourteen' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-14' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 14th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      ),
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'development' },
	        'Development'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '36':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Fifteen' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-15' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 15th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      ),
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'development' },
	        'Development'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '37':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Markdown Test' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-15' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 15th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-15-17-A-Markdown-Test.md' }), document.getElementById('postMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'development' },
	        'Development'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '38':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Push vs Pull AIs' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-17' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 17th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-15-17-AI.md' }), document.getElementById('postMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'development' },
	        'Development'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '39':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Sixteen' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-16' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 16th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-16-17-Sixteen.md' }), document.getElementById('postMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '40':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Seventeen', subtitle: 'The Dilemma' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-17' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 17th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-17-17-Seventeen.md' }), document.getElementById('postMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '41':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Eighteen' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-18' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 18th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-18-17-Eighteen.md' }), document.getElementById('postMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '42':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Nineteen' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-19' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 19th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-19-17-Nineteen.md' }), document.getElementById('postMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '43':
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Twenty' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-20' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 20th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    _reactDom2.default.render(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-20-17-Twenty.md' }), document.getElementById('postMount'));
	    _reactDom2.default.render(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    _reactDom2.default.render(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '44':
	    (0, _reactDom.render)(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Twenty One' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-21' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 21st, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    (0, _reactDom.render)(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-21-17-TwentyOne.md' }), document.getElementById('postMount'));
	    (0, _reactDom.render)(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    (0, _reactDom.render)(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '45':
	    (0, _reactDom.render)(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Twenty Two' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-22' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 22nd, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    (0, _reactDom.render)(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-22-17-TwentyTwo.md' }), document.getElementById('postMount'));
	    (0, _reactDom.render)(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    (0, _reactDom.render)(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '46':
	    (0, _reactDom.render)(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Twenty Three' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-23' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 23rd, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    (0, _reactDom.render)(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-23-17-TwentyThree.md' }), document.getElementById('postMount'));
	    (0, _reactDom.render)(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    (0, _reactDom.render)(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	  case '47':
	    (0, _reactDom.render)(_react2.default.createElement(
	      _components.PostHeader,
	      { title: 'Twenty Four' },
	      _react2.default.createElement(
	        'time',
	        { dateTime: '2017-01-24' },
	        _react2.default.createElement(
	          'a',
	          { href: './' },
	          'January'
	        ),
	        ' 24th, 2017'
	      )
	    ), document.getElementById('headerMount'));
	    (0, _reactDom.render)(_react2.default.createElement(_post2.default, { year: '2017', month: 'January', title: '01-24-17-TwentyFour.md' }), document.getElementById('postMount'));
	    (0, _reactDom.render)(_react2.default.createElement(
	      _components.TagContainer,
	      { title: 'Tags:' },
	      _react2.default.createElement(
	        _components.Tag,
	        { href: 'daily' },
	        'Daily'
	      )
	    ), document.getElementById('tagMount'));
	    (0, _reactDom.render)(_react2.default.createElement(_components.PostFooter, null), document.getElementById('footerMount'));
	    break;
	}

/***/ },

/***/ 243:
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

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ColorCards = undefined;
	
	var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n\n  & > div {\n    width: 10em;\n    height: 10em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  & span {\n    display: inline-block;\n    padding: .1em .3em;\n    background-color: rgba(255, 255, 255, .7);\n    color: black;\n  }\n'], ['\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: center;\n\n  & > div {\n    width: 10em;\n    height: 10em;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  & span {\n    display: inline-block;\n    padding: .1em .3em;\n    background-color: rgba(255, 255, 255, .7);\n    color: black;\n  }\n']);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _styledComponents = __webpack_require__(173);
	
	var _styledComponents2 = _interopRequireDefault(_styledComponents);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
	
	var ColorCardsUnStyled = function ColorCardsUnStyled(_ref) {
	  var colors = _ref.colors,
	      className = _ref.className;
	
	  console.log(colors, className);
	  var cards = colors.map(function (obj, index) {
	    var styles = {
	      backgroundColor: obj.hex
	    };
	    return _react2.default.createElement(
	      'div',
	      { key: index, style: styles },
	      _react2.default.createElement(
	        'span',
	        null,
	        obj.hex
	      )
	    );
	  });
	  return _react2.default.createElement(
	    'div',
	    { className: className },
	    cards
	  );
	};
	
	var ColorCards = exports.ColorCards = (0, _styledComponents2.default)(ColorCardsUnStyled)(_templateObject);

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _marked = __webpack_require__(246);
	
	var _marked2 = _interopRequireDefault(_marked);
	
	__webpack_require__(247);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Post = function (_Component) {
	  _inherits(Post, _Component);
	
	  function Post(props) {
	    _classCallCheck(this, Post);
	
	    var _this = _possibleConstructorReturn(this, (Post.__proto__ || Object.getPrototypeOf(Post)).call(this, props));
	
	    _this.componentDidMount = function () {
	      var postUrl = '/raw/' + _this.props.year + '/' + _this.props.month + '/' + _this.props.title;
	      window.fetch(postUrl).then(function (data) {
	        data.text().then(function (md) {
	          _this.setState({
	            loading: false,
	            markdown: md
	          });
	        });
	      }).catch(function (err) {
	        return console.warn(err);
	      });
	    };
	
	    _this.render = function () {
	      return _react2.default.createElement('article', { className: _this.state.loading ? 'loader' : 'Post', dangerouslySetInnerHTML: { __html: (0, _marked2.default)(_this.state.markdown) } });
	    };
	
	    _this.state = {
	      loading: true,
	      markdown: ''
	    };
	    return _this;
	  }
	
	  return Post;
	}(_react.Component);
	
	exports.default = Post;

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * marked - a markdown parser
	 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
	 * https://github.com/chjj/marked
	 */
	
	;(function() {
	
	/**
	 * Block-Level Grammar
	 */
	
	var block = {
	  newline: /^\n+/,
	  code: /^( {4}[^\n]+\n*)+/,
	  fences: noop,
	  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
	  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
	  nptable: noop,
	  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
	  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
	  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
	  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
	  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
	  table: noop,
	  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
	  text: /^[^\n]+/
	};
	
	block.bullet = /(?:[*+-]|\d+\.)/;
	block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
	block.item = replace(block.item, 'gm')
	  (/bull/g, block.bullet)
	  ();
	
	block.list = replace(block.list)
	  (/bull/g, block.bullet)
	  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
	  ('def', '\\n+(?=' + block.def.source + ')')
	  ();
	
	block.blockquote = replace(block.blockquote)
	  ('def', block.def)
	  ();
	
	block._tag = '(?!(?:'
	  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
	  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
	  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';
	
	block.html = replace(block.html)
	  ('comment', /<!--[\s\S]*?-->/)
	  ('closed', /<(tag)[\s\S]+?<\/\1>/)
	  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
	  (/tag/g, block._tag)
	  ();
	
	block.paragraph = replace(block.paragraph)
	  ('hr', block.hr)
	  ('heading', block.heading)
	  ('lheading', block.lheading)
	  ('blockquote', block.blockquote)
	  ('tag', '<' + block._tag)
	  ('def', block.def)
	  ();
	
	/**
	 * Normal Block Grammar
	 */
	
	block.normal = merge({}, block);
	
	/**
	 * GFM Block Grammar
	 */
	
	block.gfm = merge({}, block.normal, {
	  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
	  paragraph: /^/,
	  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
	});
	
	block.gfm.paragraph = replace(block.paragraph)
	  ('(?!', '(?!'
	    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
	    + block.list.source.replace('\\1', '\\3') + '|')
	  ();
	
	/**
	 * GFM + Tables Block Grammar
	 */
	
	block.tables = merge({}, block.gfm, {
	  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
	  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
	});
	
	/**
	 * Block Lexer
	 */
	
	function Lexer(options) {
	  this.tokens = [];
	  this.tokens.links = {};
	  this.options = options || marked.defaults;
	  this.rules = block.normal;
	
	  if (this.options.gfm) {
	    if (this.options.tables) {
	      this.rules = block.tables;
	    } else {
	      this.rules = block.gfm;
	    }
	  }
	}
	
	/**
	 * Expose Block Rules
	 */
	
	Lexer.rules = block;
	
	/**
	 * Static Lex Method
	 */
	
	Lexer.lex = function(src, options) {
	  var lexer = new Lexer(options);
	  return lexer.lex(src);
	};
	
	/**
	 * Preprocessing
	 */
	
	Lexer.prototype.lex = function(src) {
	  src = src
	    .replace(/\r\n|\r/g, '\n')
	    .replace(/\t/g, '    ')
	    .replace(/\u00a0/g, ' ')
	    .replace(/\u2424/g, '\n');
	
	  return this.token(src, true);
	};
	
	/**
	 * Lexing
	 */
	
	Lexer.prototype.token = function(src, top, bq) {
	  var src = src.replace(/^ +$/gm, '')
	    , next
	    , loose
	    , cap
	    , bull
	    , b
	    , item
	    , space
	    , i
	    , l;
	
	  while (src) {
	    // newline
	    if (cap = this.rules.newline.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[0].length > 1) {
	        this.tokens.push({
	          type: 'space'
	        });
	      }
	    }
	
	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      cap = cap[0].replace(/^ {4}/gm, '');
	      this.tokens.push({
	        type: 'code',
	        text: !this.options.pedantic
	          ? cap.replace(/\n+$/, '')
	          : cap
	      });
	      continue;
	    }
	
	    // fences (gfm)
	    if (cap = this.rules.fences.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'code',
	        lang: cap[2],
	        text: cap[3] || ''
	      });
	      continue;
	    }
	
	    // heading
	    if (cap = this.rules.heading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[1].length,
	        text: cap[2]
	      });
	      continue;
	    }
	
	    // table no leading pipe (gfm)
	    if (top && (cap = this.rules.nptable.exec(src))) {
	      src = src.substring(cap[0].length);
	
	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/\n$/, '').split('\n')
	      };
	
	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }
	
	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i].split(/ *\| */);
	      }
	
	      this.tokens.push(item);
	
	      continue;
	    }
	
	    // lheading
	    if (cap = this.rules.lheading.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'heading',
	        depth: cap[2] === '=' ? 1 : 2,
	        text: cap[1]
	      });
	      continue;
	    }
	
	    // hr
	    if (cap = this.rules.hr.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'hr'
	      });
	      continue;
	    }
	
	    // blockquote
	    if (cap = this.rules.blockquote.exec(src)) {
	      src = src.substring(cap[0].length);
	
	      this.tokens.push({
	        type: 'blockquote_start'
	      });
	
	      cap = cap[0].replace(/^ *> ?/gm, '');
	
	      // Pass `top` to keep the current
	      // "toplevel" state. This is exactly
	      // how markdown.pl works.
	      this.token(cap, top, true);
	
	      this.tokens.push({
	        type: 'blockquote_end'
	      });
	
	      continue;
	    }
	
	    // list
	    if (cap = this.rules.list.exec(src)) {
	      src = src.substring(cap[0].length);
	      bull = cap[2];
	
	      this.tokens.push({
	        type: 'list_start',
	        ordered: bull.length > 1
	      });
	
	      // Get each top-level item.
	      cap = cap[0].match(this.rules.item);
	
	      next = false;
	      l = cap.length;
	      i = 0;
	
	      for (; i < l; i++) {
	        item = cap[i];
	
	        // Remove the list item's bullet
	        // so it is seen as the next token.
	        space = item.length;
	        item = item.replace(/^ *([*+-]|\d+\.) +/, '');
	
	        // Outdent whatever the
	        // list item contains. Hacky.
	        if (~item.indexOf('\n ')) {
	          space -= item.length;
	          item = !this.options.pedantic
	            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
	            : item.replace(/^ {1,4}/gm, '');
	        }
	
	        // Determine whether the next list item belongs here.
	        // Backpedal if it does not belong in this list.
	        if (this.options.smartLists && i !== l - 1) {
	          b = block.bullet.exec(cap[i + 1])[0];
	          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
	            src = cap.slice(i + 1).join('\n') + src;
	            i = l - 1;
	          }
	        }
	
	        // Determine whether item is loose or not.
	        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
	        // for discount behavior.
	        loose = next || /\n\n(?!\s*$)/.test(item);
	        if (i !== l - 1) {
	          next = item.charAt(item.length - 1) === '\n';
	          if (!loose) loose = next;
	        }
	
	        this.tokens.push({
	          type: loose
	            ? 'loose_item_start'
	            : 'list_item_start'
	        });
	
	        // Recurse.
	        this.token(item, false, bq);
	
	        this.tokens.push({
	          type: 'list_item_end'
	        });
	      }
	
	      this.tokens.push({
	        type: 'list_end'
	      });
	
	      continue;
	    }
	
	    // html
	    if (cap = this.rules.html.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: this.options.sanitize
	          ? 'paragraph'
	          : 'html',
	        pre: !this.options.sanitizer
	          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
	        text: cap[0]
	      });
	      continue;
	    }
	
	    // def
	    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.links[cap[1].toLowerCase()] = {
	        href: cap[2],
	        title: cap[3]
	      };
	      continue;
	    }
	
	    // table (gfm)
	    if (top && (cap = this.rules.table.exec(src))) {
	      src = src.substring(cap[0].length);
	
	      item = {
	        type: 'table',
	        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
	        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
	        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
	      };
	
	      for (i = 0; i < item.align.length; i++) {
	        if (/^ *-+: *$/.test(item.align[i])) {
	          item.align[i] = 'right';
	        } else if (/^ *:-+: *$/.test(item.align[i])) {
	          item.align[i] = 'center';
	        } else if (/^ *:-+ *$/.test(item.align[i])) {
	          item.align[i] = 'left';
	        } else {
	          item.align[i] = null;
	        }
	      }
	
	      for (i = 0; i < item.cells.length; i++) {
	        item.cells[i] = item.cells[i]
	          .replace(/^ *\| *| *\| *$/g, '')
	          .split(/ *\| */);
	      }
	
	      this.tokens.push(item);
	
	      continue;
	    }
	
	    // top-level paragraph
	    if (top && (cap = this.rules.paragraph.exec(src))) {
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'paragraph',
	        text: cap[1].charAt(cap[1].length - 1) === '\n'
	          ? cap[1].slice(0, -1)
	          : cap[1]
	      });
	      continue;
	    }
	
	    // text
	    if (cap = this.rules.text.exec(src)) {
	      // Top-level should never reach here.
	      src = src.substring(cap[0].length);
	      this.tokens.push({
	        type: 'text',
	        text: cap[0]
	      });
	      continue;
	    }
	
	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }
	
	  return this.tokens;
	};
	
	/**
	 * Inline-Level Grammar
	 */
	
	var inline = {
	  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
	  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
	  url: noop,
	  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
	  link: /^!?\[(inside)\]\(href\)/,
	  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
	  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
	  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
	  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
	  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
	  br: /^ {2,}\n(?!\s*$)/,
	  del: noop,
	  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
	};
	
	inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
	inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;
	
	inline.link = replace(inline.link)
	  ('inside', inline._inside)
	  ('href', inline._href)
	  ();
	
	inline.reflink = replace(inline.reflink)
	  ('inside', inline._inside)
	  ();
	
	/**
	 * Normal Inline Grammar
	 */
	
	inline.normal = merge({}, inline);
	
	/**
	 * Pedantic Inline Grammar
	 */
	
	inline.pedantic = merge({}, inline.normal, {
	  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
	  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
	});
	
	/**
	 * GFM Inline Grammar
	 */
	
	inline.gfm = merge({}, inline.normal, {
	  escape: replace(inline.escape)('])', '~|])')(),
	  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
	  del: /^~~(?=\S)([\s\S]*?\S)~~/,
	  text: replace(inline.text)
	    (']|', '~]|')
	    ('|', '|https?://|')
	    ()
	});
	
	/**
	 * GFM + Line Breaks Inline Grammar
	 */
	
	inline.breaks = merge({}, inline.gfm, {
	  br: replace(inline.br)('{2,}', '*')(),
	  text: replace(inline.gfm.text)('{2,}', '*')()
	});
	
	/**
	 * Inline Lexer & Compiler
	 */
	
	function InlineLexer(links, options) {
	  this.options = options || marked.defaults;
	  this.links = links;
	  this.rules = inline.normal;
	  this.renderer = this.options.renderer || new Renderer;
	  this.renderer.options = this.options;
	
	  if (!this.links) {
	    throw new
	      Error('Tokens array requires a `links` property.');
	  }
	
	  if (this.options.gfm) {
	    if (this.options.breaks) {
	      this.rules = inline.breaks;
	    } else {
	      this.rules = inline.gfm;
	    }
	  } else if (this.options.pedantic) {
	    this.rules = inline.pedantic;
	  }
	}
	
	/**
	 * Expose Inline Rules
	 */
	
	InlineLexer.rules = inline;
	
	/**
	 * Static Lexing/Compiling Method
	 */
	
	InlineLexer.output = function(src, links, options) {
	  var inline = new InlineLexer(links, options);
	  return inline.output(src);
	};
	
	/**
	 * Lexing/Compiling
	 */
	
	InlineLexer.prototype.output = function(src) {
	  var out = ''
	    , link
	    , text
	    , href
	    , cap;
	
	  while (src) {
	    // escape
	    if (cap = this.rules.escape.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += cap[1];
	      continue;
	    }
	
	    // autolink
	    if (cap = this.rules.autolink.exec(src)) {
	      src = src.substring(cap[0].length);
	      if (cap[2] === '@') {
	        text = cap[1].charAt(6) === ':'
	          ? this.mangle(cap[1].substring(7))
	          : this.mangle(cap[1]);
	        href = this.mangle('mailto:') + text;
	      } else {
	        text = escape(cap[1]);
	        href = text;
	      }
	      out += this.renderer.link(href, null, text);
	      continue;
	    }
	
	    // url (gfm)
	    if (!this.inLink && (cap = this.rules.url.exec(src))) {
	      src = src.substring(cap[0].length);
	      text = escape(cap[1]);
	      href = text;
	      out += this.renderer.link(href, null, text);
	      continue;
	    }
	
	    // tag
	    if (cap = this.rules.tag.exec(src)) {
	      if (!this.inLink && /^<a /i.test(cap[0])) {
	        this.inLink = true;
	      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
	        this.inLink = false;
	      }
	      src = src.substring(cap[0].length);
	      out += this.options.sanitize
	        ? this.options.sanitizer
	          ? this.options.sanitizer(cap[0])
	          : escape(cap[0])
	        : cap[0]
	      continue;
	    }
	
	    // link
	    if (cap = this.rules.link.exec(src)) {
	      src = src.substring(cap[0].length);
	      this.inLink = true;
	      out += this.outputLink(cap, {
	        href: cap[2],
	        title: cap[3]
	      });
	      this.inLink = false;
	      continue;
	    }
	
	    // reflink, nolink
	    if ((cap = this.rules.reflink.exec(src))
	        || (cap = this.rules.nolink.exec(src))) {
	      src = src.substring(cap[0].length);
	      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
	      link = this.links[link.toLowerCase()];
	      if (!link || !link.href) {
	        out += cap[0].charAt(0);
	        src = cap[0].substring(1) + src;
	        continue;
	      }
	      this.inLink = true;
	      out += this.outputLink(cap, link);
	      this.inLink = false;
	      continue;
	    }
	
	    // strong
	    if (cap = this.rules.strong.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.strong(this.output(cap[2] || cap[1]));
	      continue;
	    }
	
	    // em
	    if (cap = this.rules.em.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.em(this.output(cap[2] || cap[1]));
	      continue;
	    }
	
	    // code
	    if (cap = this.rules.code.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.codespan(escape(cap[2], true));
	      continue;
	    }
	
	    // br
	    if (cap = this.rules.br.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.br();
	      continue;
	    }
	
	    // del (gfm)
	    if (cap = this.rules.del.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.del(this.output(cap[1]));
	      continue;
	    }
	
	    // text
	    if (cap = this.rules.text.exec(src)) {
	      src = src.substring(cap[0].length);
	      out += this.renderer.text(escape(this.smartypants(cap[0])));
	      continue;
	    }
	
	    if (src) {
	      throw new
	        Error('Infinite loop on byte: ' + src.charCodeAt(0));
	    }
	  }
	
	  return out;
	};
	
	/**
	 * Compile Link
	 */
	
	InlineLexer.prototype.outputLink = function(cap, link) {
	  var href = escape(link.href)
	    , title = link.title ? escape(link.title) : null;
	
	  return cap[0].charAt(0) !== '!'
	    ? this.renderer.link(href, title, this.output(cap[1]))
	    : this.renderer.image(href, title, escape(cap[1]));
	};
	
	/**
	 * Smartypants Transformations
	 */
	
	InlineLexer.prototype.smartypants = function(text) {
	  if (!this.options.smartypants) return text;
	  return text
	    // em-dashes
	    .replace(/---/g, '\u2014')
	    // en-dashes
	    .replace(/--/g, '\u2013')
	    // opening singles
	    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
	    // closing singles & apostrophes
	    .replace(/'/g, '\u2019')
	    // opening doubles
	    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
	    // closing doubles
	    .replace(/"/g, '\u201d')
	    // ellipses
	    .replace(/\.{3}/g, '\u2026');
	};
	
	/**
	 * Mangle Links
	 */
	
	InlineLexer.prototype.mangle = function(text) {
	  if (!this.options.mangle) return text;
	  var out = ''
	    , l = text.length
	    , i = 0
	    , ch;
	
	  for (; i < l; i++) {
	    ch = text.charCodeAt(i);
	    if (Math.random() > 0.5) {
	      ch = 'x' + ch.toString(16);
	    }
	    out += '&#' + ch + ';';
	  }
	
	  return out;
	};
	
	/**
	 * Renderer
	 */
	
	function Renderer(options) {
	  this.options = options || {};
	}
	
	Renderer.prototype.code = function(code, lang, escaped) {
	  if (this.options.highlight) {
	    var out = this.options.highlight(code, lang);
	    if (out != null && out !== code) {
	      escaped = true;
	      code = out;
	    }
	  }
	
	  if (!lang) {
	    return '<pre><code>'
	      + (escaped ? code : escape(code, true))
	      + '\n</code></pre>';
	  }
	
	  return '<pre><code class="'
	    + this.options.langPrefix
	    + escape(lang, true)
	    + '">'
	    + (escaped ? code : escape(code, true))
	    + '\n</code></pre>\n';
	};
	
	Renderer.prototype.blockquote = function(quote) {
	  return '<blockquote>\n' + quote + '</blockquote>\n';
	};
	
	Renderer.prototype.html = function(html) {
	  return html;
	};
	
	Renderer.prototype.heading = function(text, level, raw) {
	  return '<h'
	    + level
	    + ' id="'
	    + this.options.headerPrefix
	    + raw.toLowerCase().replace(/[^\w]+/g, '-')
	    + '">'
	    + text
	    + '</h'
	    + level
	    + '>\n';
	};
	
	Renderer.prototype.hr = function() {
	  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
	};
	
	Renderer.prototype.list = function(body, ordered) {
	  var type = ordered ? 'ol' : 'ul';
	  return '<' + type + '>\n' + body + '</' + type + '>\n';
	};
	
	Renderer.prototype.listitem = function(text) {
	  return '<li>' + text + '</li>\n';
	};
	
	Renderer.prototype.paragraph = function(text) {
	  return '<p>' + text + '</p>\n';
	};
	
	Renderer.prototype.table = function(header, body) {
	  return '<table>\n'
	    + '<thead>\n'
	    + header
	    + '</thead>\n'
	    + '<tbody>\n'
	    + body
	    + '</tbody>\n'
	    + '</table>\n';
	};
	
	Renderer.prototype.tablerow = function(content) {
	  return '<tr>\n' + content + '</tr>\n';
	};
	
	Renderer.prototype.tablecell = function(content, flags) {
	  var type = flags.header ? 'th' : 'td';
	  var tag = flags.align
	    ? '<' + type + ' style="text-align:' + flags.align + '">'
	    : '<' + type + '>';
	  return tag + content + '</' + type + '>\n';
	};
	
	// span level renderer
	Renderer.prototype.strong = function(text) {
	  return '<strong>' + text + '</strong>';
	};
	
	Renderer.prototype.em = function(text) {
	  return '<em>' + text + '</em>';
	};
	
	Renderer.prototype.codespan = function(text) {
	  return '<code>' + text + '</code>';
	};
	
	Renderer.prototype.br = function() {
	  return this.options.xhtml ? '<br/>' : '<br>';
	};
	
	Renderer.prototype.del = function(text) {
	  return '<del>' + text + '</del>';
	};
	
	Renderer.prototype.link = function(href, title, text) {
	  if (this.options.sanitize) {
	    try {
	      var prot = decodeURIComponent(unescape(href))
	        .replace(/[^\w:]/g, '')
	        .toLowerCase();
	    } catch (e) {
	      return '';
	    }
	    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
	      return '';
	    }
	  }
	  var out = '<a href="' + href + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += '>' + text + '</a>';
	  return out;
	};
	
	Renderer.prototype.image = function(href, title, text) {
	  var out = '<img src="' + href + '" alt="' + text + '"';
	  if (title) {
	    out += ' title="' + title + '"';
	  }
	  out += this.options.xhtml ? '/>' : '>';
	  return out;
	};
	
	Renderer.prototype.text = function(text) {
	  return text;
	};
	
	/**
	 * Parsing & Compiling
	 */
	
	function Parser(options) {
	  this.tokens = [];
	  this.token = null;
	  this.options = options || marked.defaults;
	  this.options.renderer = this.options.renderer || new Renderer;
	  this.renderer = this.options.renderer;
	  this.renderer.options = this.options;
	}
	
	/**
	 * Static Parse Method
	 */
	
	Parser.parse = function(src, options, renderer) {
	  var parser = new Parser(options, renderer);
	  return parser.parse(src);
	};
	
	/**
	 * Parse Loop
	 */
	
	Parser.prototype.parse = function(src) {
	  this.inline = new InlineLexer(src.links, this.options, this.renderer);
	  this.tokens = src.reverse();
	
	  var out = '';
	  while (this.next()) {
	    out += this.tok();
	  }
	
	  return out;
	};
	
	/**
	 * Next Token
	 */
	
	Parser.prototype.next = function() {
	  return this.token = this.tokens.pop();
	};
	
	/**
	 * Preview Next Token
	 */
	
	Parser.prototype.peek = function() {
	  return this.tokens[this.tokens.length - 1] || 0;
	};
	
	/**
	 * Parse Text Tokens
	 */
	
	Parser.prototype.parseText = function() {
	  var body = this.token.text;
	
	  while (this.peek().type === 'text') {
	    body += '\n' + this.next().text;
	  }
	
	  return this.inline.output(body);
	};
	
	/**
	 * Parse Current Token
	 */
	
	Parser.prototype.tok = function() {
	  switch (this.token.type) {
	    case 'space': {
	      return '';
	    }
	    case 'hr': {
	      return this.renderer.hr();
	    }
	    case 'heading': {
	      return this.renderer.heading(
	        this.inline.output(this.token.text),
	        this.token.depth,
	        this.token.text);
	    }
	    case 'code': {
	      return this.renderer.code(this.token.text,
	        this.token.lang,
	        this.token.escaped);
	    }
	    case 'table': {
	      var header = ''
	        , body = ''
	        , i
	        , row
	        , cell
	        , flags
	        , j;
	
	      // header
	      cell = '';
	      for (i = 0; i < this.token.header.length; i++) {
	        flags = { header: true, align: this.token.align[i] };
	        cell += this.renderer.tablecell(
	          this.inline.output(this.token.header[i]),
	          { header: true, align: this.token.align[i] }
	        );
	      }
	      header += this.renderer.tablerow(cell);
	
	      for (i = 0; i < this.token.cells.length; i++) {
	        row = this.token.cells[i];
	
	        cell = '';
	        for (j = 0; j < row.length; j++) {
	          cell += this.renderer.tablecell(
	            this.inline.output(row[j]),
	            { header: false, align: this.token.align[j] }
	          );
	        }
	
	        body += this.renderer.tablerow(cell);
	      }
	      return this.renderer.table(header, body);
	    }
	    case 'blockquote_start': {
	      var body = '';
	
	      while (this.next().type !== 'blockquote_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.blockquote(body);
	    }
	    case 'list_start': {
	      var body = ''
	        , ordered = this.token.ordered;
	
	      while (this.next().type !== 'list_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.list(body, ordered);
	    }
	    case 'list_item_start': {
	      var body = '';
	
	      while (this.next().type !== 'list_item_end') {
	        body += this.token.type === 'text'
	          ? this.parseText()
	          : this.tok();
	      }
	
	      return this.renderer.listitem(body);
	    }
	    case 'loose_item_start': {
	      var body = '';
	
	      while (this.next().type !== 'list_item_end') {
	        body += this.tok();
	      }
	
	      return this.renderer.listitem(body);
	    }
	    case 'html': {
	      var html = !this.token.pre && !this.options.pedantic
	        ? this.inline.output(this.token.text)
	        : this.token.text;
	      return this.renderer.html(html);
	    }
	    case 'paragraph': {
	      return this.renderer.paragraph(this.inline.output(this.token.text));
	    }
	    case 'text': {
	      return this.renderer.paragraph(this.parseText());
	    }
	  }
	};
	
	/**
	 * Helpers
	 */
	
	function escape(html, encode) {
	  return html
	    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
	    .replace(/</g, '&lt;')
	    .replace(/>/g, '&gt;')
	    .replace(/"/g, '&quot;')
	    .replace(/'/g, '&#39;');
	}
	
	function unescape(html) {
		// explicitly match decimal, hex, and named HTML entities 
	  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
	    n = n.toLowerCase();
	    if (n === 'colon') return ':';
	    if (n.charAt(0) === '#') {
	      return n.charAt(1) === 'x'
	        ? String.fromCharCode(parseInt(n.substring(2), 16))
	        : String.fromCharCode(+n.substring(1));
	    }
	    return '';
	  });
	}
	
	function replace(regex, opt) {
	  regex = regex.source;
	  opt = opt || '';
	  return function self(name, val) {
	    if (!name) return new RegExp(regex, opt);
	    val = val.source || val;
	    val = val.replace(/(^|[^\[])\^/g, '$1');
	    regex = regex.replace(name, val);
	    return self;
	  };
	}
	
	function noop() {}
	noop.exec = noop;
	
	function merge(obj) {
	  var i = 1
	    , target
	    , key;
	
	  for (; i < arguments.length; i++) {
	    target = arguments[i];
	    for (key in target) {
	      if (Object.prototype.hasOwnProperty.call(target, key)) {
	        obj[key] = target[key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	
	/**
	 * Marked
	 */
	
	function marked(src, opt, callback) {
	  if (callback || typeof opt === 'function') {
	    if (!callback) {
	      callback = opt;
	      opt = null;
	    }
	
	    opt = merge({}, marked.defaults, opt || {});
	
	    var highlight = opt.highlight
	      , tokens
	      , pending
	      , i = 0;
	
	    try {
	      tokens = Lexer.lex(src, opt)
	    } catch (e) {
	      return callback(e);
	    }
	
	    pending = tokens.length;
	
	    var done = function(err) {
	      if (err) {
	        opt.highlight = highlight;
	        return callback(err);
	      }
	
	      var out;
	
	      try {
	        out = Parser.parse(tokens, opt);
	      } catch (e) {
	        err = e;
	      }
	
	      opt.highlight = highlight;
	
	      return err
	        ? callback(err)
	        : callback(null, out);
	    };
	
	    if (!highlight || highlight.length < 3) {
	      return done();
	    }
	
	    delete opt.highlight;
	
	    if (!pending) return done();
	
	    for (; i < tokens.length; i++) {
	      (function(token) {
	        if (token.type !== 'code') {
	          return --pending || done();
	        }
	        return highlight(token.text, token.lang, function(err, code) {
	          if (err) return done(err);
	          if (code == null || code === token.text) {
	            return --pending || done();
	          }
	          token.text = code;
	          token.escaped = true;
	          --pending || done();
	        });
	      })(tokens[i]);
	    }
	
	    return;
	  }
	  try {
	    if (opt) opt = merge({}, marked.defaults, opt);
	    return Parser.parse(Lexer.lex(src, opt), opt);
	  } catch (e) {
	    e.message += '\nPlease report this to https://github.com/chjj/marked.';
	    if ((opt || marked.defaults).silent) {
	      return '<p>An error occured:</p><pre>'
	        + escape(e.message + '', true)
	        + '</pre>';
	    }
	    throw e;
	  }
	}
	
	/**
	 * Options
	 */
	
	marked.options =
	marked.setOptions = function(opt) {
	  merge(marked.defaults, opt);
	  return marked;
	};
	
	marked.defaults = {
	  gfm: true,
	  tables: true,
	  breaks: false,
	  pedantic: false,
	  sanitize: false,
	  sanitizer: null,
	  mangle: true,
	  smartLists: false,
	  silent: false,
	  highlight: null,
	  langPrefix: 'lang-',
	  smartypants: false,
	  headerPrefix: '',
	  renderer: new Renderer,
	  xhtml: false
	};
	
	/**
	 * Expose
	 */
	
	marked.Parser = Parser;
	marked.parser = Parser.parse;
	
	marked.Renderer = Renderer;
	
	marked.Lexer = Lexer;
	marked.lexer = Lexer.lex;
	
	marked.InlineLexer = InlineLexer;
	marked.inlineLexer = InlineLexer.output;
	
	marked.parse = marked;
	
	if (true) {
	  module.exports = marked;
	} else if (typeof define === 'function' && define.amd) {
	  define(function() { return marked; });
	} else {
	  this.marked = marked;
	}
	
	}).call(function() {
	  return this || (typeof window !== 'undefined' ? window : global);
	}());
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 247:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});
//# sourceMappingURL=blog.js.map