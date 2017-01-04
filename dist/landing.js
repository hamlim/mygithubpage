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
	
	var landingcss = __webpack_require__(175);
	
	var listing = [{
	  'month': 'January',
	  'year': '2017',
	  'articles': [{
	    'title': 'Four',
	    'link': 'four'
	  }, {
	    'title': 'Three',
	    'link': 'three'
	  }, {
	    'title': 'Two',
	    'link': 'two'
	  }, {
	    'title': 'One',
	    'link': 'one'
	  }]
	}, {
	  'month': 'December',
	  'year': '2016',
	  'articles': [{
	    'title': '2017',
	    'link': '2017'
	  }, {
	    'title': 'Drained',
	    'link': 'Drained'
	  }, {
	    'title': 'Paralysis',
	    'link': 'Paralysis'
	  }, {
	    'title': 'The Macbook Pro',
	    'link': 'TheMacbookPro'
	  }, {
	    'title': 'The Limitations of CSS in JSX',
	    'link': 'CSSinJSXLimitations'
	  }, {
	    'title': 'CSS Feature Locks',
	    'link': 'CSSFeatureLocks'
	  }, {
	    'title': 'November Recap',
	    'link': 'NovemberRecap'
	  }]
	}, {
	  'month': 'November',
	  'year': '2016',
	  'articles': [{
	    'title': 'Color Cards',
	    'link': 'ColorCards'
	  }, {
	    'title': 'Quit Complaining',
	    'link': 'QuitComplaining'
	  }, {
	    'title': 'Government is Broken',
	    'link': 'GovernmentIsBroken'
	  }, {
	    'title': 'The Future of Consumer VR',
	    'link': 'TheFutureofConsumerVR'
	  }, {
	    'title': 'Links',
	    'link': 'Links'
	  }, {
	    'title': 'That First Fucking Step',
	    'link': 'ThatFirstFuckingStep'
	  }, {
	    'title': 'Photos v2',
	    'link': 'Photosv2'
	  }, {
	    'title': 'Recent Projects',
	    'link': 'RecentProjects'
	  }, {
	    'title': 'Don\'t Force It',
	    'link': 'DontForceIt'
	  }, {
	    'title': 'The American Fall of 2016',
	    'link': 'TheAmericanFall2016'
	  }, {
	    'title': 'I Voted',
	    'link': 'IVoted'
	  }, {
	    'title': 'Monday Mornings',
	    'link': 'MondayMornings'
	  }, {
	    'title': 'Creativity',
	    'link': 'Creativity'
	  }, {
	    'title': 'Don\'t Reach for React',
	    'link': 'DontReachForReact'
	  }, {
	    'title': 'Macbook Pro',
	    'link': 'MacbookPro'
	  }, {
	    'title': 'Refactoring Sucks',
	    'link': 'RefactoringSucks'
	  }, {
	    'title': 'Just Ship It',
	    'link': 'JustShipIt'
	  }, {
	    'title': 'October Recap',
	    'link': 'OctoberRecap'
	  }]
	}, {
	  'month': 'October',
	  'year': '2016',
	  'articles': [{
	    'title': 'Sunday Morning Recap 3',
	    'link': 'SundayMorningRecap3'
	  }, {
	    'title': 'Weekly Recap 9',
	    'link': 'WeeklyRecap9'
	  }, {
	    'title': 'Photos v1',
	    'link': 'Photosv1'
	  }, {
	    'title': 'Weekend Projects 8',
	    'link': 'WeekendProjects008'
	  }, {
	    'title': 'Sunday Morning Recap 2',
	    'link': 'SundayMorningRecap02'
	  }, {
	    'title': 'Weekly Recap 8',
	    'link': 'WeeklyRecap008'
	  }, {
	    'title': 'CSS Bugs: Inline-Block',
	    'link': 'CSSBugs1'
	  }, {
	    'title': 'Weekend Projects 7',
	    'link': 'WeekendProjects007'
	  }, {
	    'title': 'Sunday Morning Recap 1',
	    'link': 'SundayMorningRecap01'
	  }, {
	    'title': 'State of my Projects',
	    'link': 'State-of-my-Projects'
	  }, {
	    'title': 'Weekly Recap 7',
	    'link': 'WeeklyRecap007'
	  }, {
	    'title': 'Pseudo Elements',
	    'link': 'PseudoPart2'
	  }, {
	    'title': 'Pseudo Classes',
	    'link': 'PseudoPart1'
	  }, {
	    'title': 'Weekend Projects 6',
	    'link': 'WeekendProjects006'
	  }, {
	    'title': 'The Great CSS Debate',
	    'link': 'TheGreatDebate'
	  }, {
	    'title': 'Weekly Recap 6',
	    'link': 'WeeklyRecap006'
	  }, {
	    'title': 'Pixel Phones',
	    'link': 'Pixel'
	  }, {
	    'title': 'Weekly Recap 5',
	    'link': 'WeeklyRecap005'
	  }, {
	    'title': 'October 4th',
	    'link': 'October4th'
	  }]
	}, {
	  'month': 'September',
	  'year': '2016',
	  'articles': [{
	    'title': 'September Update',
	    'link': 'SeptemberUpdate'
	  }, {
	    'title': 'Sick Update',
	    'link': 'Sick'
	  }, {
	    'title': 'Weekly Recap 4',
	    'link': 'WeeklyRecap004'
	  }, {
	    'title': 'Preserving Aspect Ratio with CSS',
	    'link': 'VideoAspectRatioWithCSS'
	  }, {
	    'title': 'GoPro Karma',
	    'link': 'GoProKarma'
	  }, {
	    'title': 'Google Event Updates',
	    'link': 'GoogleEventUpdates'
	  }, {
	    'title': 'Weekend Projects 3',
	    'link': 'WeekendProjects003'
	  }, {
	    'title': 'Weekly Recap 3',
	    'link': 'WeeklyRecap003'
	  }, {
	    'title': 'Hyper(term) is Cool',
	    'link': 'HyperTerm'
	  }, {
	    'title': 'RFP: Database API',
	    'link': 'RFP1Database'
	  }, {
	    'title': 'Google Event Predictions',
	    'link': 'GoogleEventPredictions'
	  }, {
	    'title': 'Github is a Pain',
	    'link': 'GithubIsAPain'
	  }, {
	    'title': 'Weekend Projects 2',
	    'link': 'WeekendProjects002'
	  }, {
	    'title': 'Weekly Recap 2',
	    'link': 'WeeklyRecap002'
	  }, {
	    'title': 'YouTube is Not for You',
	    'link': 'YouTube_Is_For_Advertisers'
	  }, {
	    'title': 'Weekend Projects 1',
	    'link': 'BuildingAnAPIOnNow'
	  }, {
	    'title': 'Weekly Recap 1',
	    'link': 'WeeklyRecap001'
	  }]
	}, {
	  'month': 'August',
	  'year': '2016',
	  'articles': [{
	    'title': 'My New Website',
	    'link': 'My_New_Website'
	  }, {
	    'title': 'Pull Quotes on the Web',
	    'link': 'pullQuotes'
	  }, {
	    'title': 'Redesign v5',
	    'link': 'designV5'
	  }, {
	    'title': 'Attribute Selectors FTW',
	    'link': 'attributeSelectors'
	  }, {
	    'title': 'August Updates',
	    'link': 'august'
	  }]
	}, {
	  'month': 'April',
	  'year': '2016',
	  'articles': [{
	    'title': 'Redesign',
	    'link': 'Redesign'
	  }]
	}, {
	  'month': 'January',
	  'year': '2016',
	  'articles': [{
	    'title': 'LMS Redesign Part 1',
	    'link': 'LMSRedesignPart1'
	  }, {
	    'title': 'The Scariest Time of My Life',
	    'link': 'afraid'
	  }, {
	    'title': 'Client Side',
	    'link': 'ClientSide'
	  }, {
	    'title': '10,000 Characters',
	    'link': 'WhatTwitterShouldDo'
	  }, {
	    'title': 'My First Project of 2016',
	    'link': 'FirstProjectof2016'
	  }, {
	    'title': 'Building in 2016',
	    'link': 'BuildingIn2016'
	  }, {
	    'title': 'DJI vs GoPro',
	    'link': 'DJIvsGoPro'
	  }]
	}, {
	  'month': 'December',
	  'year': '2015',
	  'articles': [{
	    'title': '2016 Goals',
	    'link': '2016'
	  }, {
	    'title': '2015 in Review',
	    'link': '2015'
	  }, {
	    'title': 'Where is the Powerpoint Remake?',
	    'link': 'Powerpoint'
	  }, {
	    'title': 'Blogging vs Working',
	    'link': 'BloggingvsWorking'
	  }, {
	    'title': 'The Social Max',
	    'link': 'TheSocialMax'
	  }]
	}, {
	  'month': 'November',
	  'year': '2015',
	  'articles': [{
	    'title': 'The Message is in the Medium',
	    'link': 'Message'
	  }, {
	    'title': 'A New Resume',
	    'link': 'ANewResume'
	  }, {
	    'title': 'Family Time',
	    'link': 'FamilyTime'
	  }, {
	    'title': 'Weekend Projects',
	    'link': 'WeekendProjects'
	  }, {
	    'title': 'Thanksgiving',
	    'link': 'Thanksgiving'
	  }, {
	    'title': 'A New Look',
	    'link': 'ANewLook'
	  }]
	}];
	
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
	  _reactDom2.default.render(_react2.default.createElement(_components.AllPosts, { monthlyArticles: listing }), document.getElementById('listingMount-blog'));
	  _reactDom2.default.render(_react2.default.createElement(_components.Footer, null), document.getElementById('footerMount-blog'));
	}
	
	if (document.getElementById('monthly')) {
	  _reactDom2.default.render(_react2.default.createElement(
	    _components.Header,
	    null,
	    _react2.default.createElement(
	      'h2',
	      { className: 'header--subtitle clr--green' },
	      'Blog Archive'
	    )
	  ), document.getElementsByClassName('headerMount-blog')[0]);
	}
	
	var tagArr = ["Burnout", "Summary", "Daily"];
	
	var postsWithTags = [{
	  "name": "Drained",
	  "link": "/Posts/2016/December/Drained",
	  "tag": "Burnout"
	}, {
	  "name": "2017",
	  "link": "/Posts/2016/December/2017",
	  "tag": "Summary"
	}, {
	  "name": "One",
	  "link": "/Posts/2017/January/one",
	  "tag": "Daily"
	}, {
	  "name": "Two",
	  "link": "/Posts/2017/January/two",
	  "tag": "Daily"
	}, {
	  "name": "Three",
	  "link": "/Posts/2017/January/three",
	  "tag": "Daily"
	}, {
	  "name": "Four",
	  "link": "/Posts/2017/January/four",
	  "tag": "Daily"
	}];
	
	if (document.getElementById('tags')) {
	  _reactDom2.default.render(_react2.default.createElement(
	    _components.Header,
	    null,
	    _react2.default.createElement(
	      'h2',
	      { className: 'header--subtitle clr--green' },
	      'Blog Tags'
	    )
	  ), document.getElementsByClassName('headerMount-tags')[0]);
	  _reactDom2.default.render(_react2.default.createElement(_components.Nav, { tags: true }), document.getElementById('navMount-tags'));
	  _reactDom2.default.render(_react2.default.createElement(_components.TagApp, { tags: tagArr, taggedPosts: postsWithTags }), document.getElementById('pageMount'));
	  _reactDom2.default.render(_react2.default.createElement(_components.Footer, null), document.getElementById('footerMount-tags'));
	}

/***/ }
]);
//# sourceMappingURL=landing.js.map