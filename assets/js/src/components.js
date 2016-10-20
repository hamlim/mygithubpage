import React from 'react';

export const Nav = (props) => {
	return (
		<ul data-css-nav-links className="nav--links ul--nostyle ul--inline">
			<li data-css-li-inline className="li--inline">
				<a href="./index.html" data-css-link-active={props.index} data-css-link className="link">Portfolio</a>
			</li>
			<li data-css-li-inline className="li--inline">
				<a href="./resume.html" data-css-link-active={props.resume} data-css-link  className="link">Resume</a>
			</li>
			<li data-css-li-inline className="li--inline">
				<a href="./archive.html" data-css-link-active={props.blog} data-css-link  className="link">Blog</a>
			</li>
		</ul>
	)
};
