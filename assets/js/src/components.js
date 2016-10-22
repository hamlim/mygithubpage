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


export const Header = (props) => {
	return (
		<div className="header--siblings">
			<h1 className="header--title clr--blue">Matt Hamlin</h1>
			{props.children}
		</div>
	)
};

export const Footer = (props) => {
	return (
		<div data-css-container data-css-footer-nav>
				<div data-css-chip>&copy; <a href="https://matthamlin.me" data-css-link-article>Matt Hamlin</a> 2016</div>
					<div>
							<span data-css-chip><a href="https://twitter.com/intent/tweet?&text=Hey+@immatthamlin" data-css-link-article data-css-emoji="twitter" title="Tweet Me"></a></span>
							<span data-css-chip><a href="sms:+14252100980" data-css-link-article data-css-emoji="phone" title="Text Me"></a></span>
							<span data-css-chip><a href="mailto:matthewjameshamlin@gmail.com" data-css-link-article data-css-emoji="email" title="Email Me"></a></span>
							<span data-css-chip><a href="https://m.me/immatthamlin" data-css-link-article data-css-emoji="fbm" title="Message Me"></a></span>
					</div>
				<div data-css-chip><a href="https://twitter.com/immatthamlin" data-css-link-article>Twitter</a></div>
		</div>
	)
};
