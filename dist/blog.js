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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var post_css = __webpack_require__(245);
	
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
	    window.fetch('/Assets/json/colors.json').then(function (response) {
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

/***/ }

});
//# sourceMappingURL=blog.js.map