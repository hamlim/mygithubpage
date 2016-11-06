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
			<h1 className="header--title clr--blue">
				<svg className="papercraft papercraft-m" width="64" height="64" viewBox="0 0 32 32" title="Matt Hamlin">
					<path className="papercraft-back" d="M32 0 L32 32 L0 32 Z"/>
					<path className="papercraft-front" d="M0 0 L32 32 L0 32 Z"/>
				</svg>
				<svg className="papercraft papercraft-h" width="64" height="64" viewBox="0 0 32 32">
	        <path className="papercraft-back" d="M0 0 L6 0 L12 32 L0 32 Z M20 0 L32 0 L32 32 L22 32 Z"/>
	        <path className="papercraft-front" d="M32 0 L32 20 L0 32 L0 12 Z"/>
	      </svg>
			</h1>
			{props.children}
		</div>
	)
};

const PostList = (props) => {
	const articleLinks = props.articles.map(function(article, index){
		return (
			<li key={index} data-css-li>{article.title} - <a href={"./Posts/2016/"+ props.month +"/" + article.link} data-css-link>Read Here</a></li>
		); });
  return (
		<ul>
			<h5 data-css-tac><a href={"./Posts/2016/" + props.month} data-css-link>{props.month} {props.year}:</a></h5>
			{articleLinks}
		</ul>
  )
};

export const AllPosts = (monthlyArticles, ...props) => {
	const monthLists = monthlyArticles.monthlyArticles.map(function(obj, index) { return (<PostList key={index} month={obj.month} year={obj.year} articles={obj.articles} />); });
	return (
		<section className="page--content">
			<h4 className="content--header tm2">Past Blog Posts:</h4>
			{monthLists}
		</section>
	)
};

export const Footer = (props) => {
	return (
		<div data-css-container data-css-footer-nav>
				<div data-css-chip>&copy; <a href="https://matthamlin.me" data-css-link-article>Matt Hamlin</a> 2016</div>
					<div>
							<span data-css-chip><a href="https://twitter.com/intent/tweet?&text=Hey+@immatthamlin" className="escape" data-css-emoji="twitter" title="Tweet Me"></a></span>
							<span data-css-chip><a href="sms:+14252100980" className="escape" data-css-emoji="phone" title="Text Me"></a></span>
							<span data-css-chip><a href="mailto:matthewjameshamlin@gmail.com" className="escape" data-css-emoji="email" title="Email Me"></a></span>
							<span data-css-chip><a href="https://m.me/immatthamlin" className="escape" data-css-emoji="fbm" title="Message Me"></a></span>
					</div>
				<div data-css-chip><a href="https://twitter.com/immatthamlin" data-css-link-article>Twitter</a></div>
				<link href="https://fonts.googleapis.com/css?family=Quicksand:400,700" rel="stylesheet" />
		</div>
	)
};
