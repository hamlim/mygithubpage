import React from 'react';

export const Nav = (props) => {
	return (
		<ul data-css-nav-links className="nav--links ul--nostyle ul--inline">
			<li data-css-li-inline className="li--inline">
				<a href="./index.html" className={props.index ? "link active": "link"}>Portfolio</a>
			</li>
			<li data-css-li-inline className="li--inline">
				<a href="./resume.html" className={props.resume ? "link active": "link"}>Resume</a>
			</li>
			<li data-css-li-inline className="li--inline">
				<a href="./archive.html" className={props.blog ? "link active": "link"}>Blog</a>
			</li>
		</ul>
	)
};


export const Header = (props) => {
	return (
		<div className="header--siblings">
			<h1 className="header--title">
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
				<div data-css-chip>&copy; <a href="https://matthamlin.me">Matt Hamlin</a> 2016</div>
					<div>
							<span data-css-chip><a href="https://twitter.com/intent/tweet?&text=Hey+@immatthamlin" className="escape" title="Tweet Me, @immatthamlin">
								<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" className="social-icon social-icon--small social-icon--twitter">
									<path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/>
								</svg>
							</a></span>
							<span data-css-chip><a href="sms:+14252100980" className="escape" title="Text Me">
								<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" className="social-icon social-icon--small social-icon--chat">
								  <path d="M15.693 8.5c-.406-.92-1.172-1.65-2.06-2.1-1.57-.795-3.522-.79-5.086.02-1.088.558-1.995 1.558-2.253 2.775-.213.896-.022 1.86.453 2.64C7.454 13.01 8.732 13.76 10.06 14c.963.196 1.958.08 2.893-.19.56.218 1.06.57 1.605.83-.14-.47-.29-.937-.45-1.4.61-.434 1.163-.974 1.496-1.652.496-.945.526-2.115.09-3.087zM9.078 2.19c-1.663-.936-3.735-1.077-5.524-.43-1.175.423-2.24 1.21-2.897 2.28-.596.967-.82 2.172-.532 3.278.288 1.227 1.14 2.255 2.174 2.942-.195.566-.388 1.133-.57 1.703.656-.34 1.303-.695 1.956-1.04.786.25 1.613.372 2.438.345-.215-.63-.266-1.31-.168-1.968.157-.914.65-1.75 1.334-2.37 1.15-1.076 2.78-1.53 4.33-1.42-.29-1.423-1.29-2.626-2.542-3.32zm1.154 6.66c-.138.434-.77.565-1.076.234-.337-.306-.206-.946.236-1.082.49-.207 1.055.358.84.848zm3.197.06c-.17.392-.755.482-1.044.18-.14-.127-.174-.318-.23-.487.074-.305.278-.622.624-.636.478-.065.898.515.65.943zM8.66 4.608c.005.64-.85 1.04-1.33.606-.498-.357-.357-1.225.228-1.405.523-.207 1.142.234 1.1.798zm-4.04.162c-.114.557-.86.826-1.297.452-.506-.356-.364-1.24.23-1.42.582-.224 1.243.367 1.068.968z"/>
								</svg>
							</a></span>
							<span data-css-chip><a href="mailto:matthewjameshamlin@gmail.com" className="escape" title="Email Me">
								<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" className="social-icon social-icon--small social-icon--email">
								  <path d="M15.89 2.847c-.193-.275-.572-.343-.848-.15L.11 13.154c.11.157.29.26.497.26h14.785c.336 0 .608-.273.608-.61V3.187c-.002-.117-.038-.235-.11-.34zM.958 2.697c-.275-.193-.655-.126-.848.15-.072.103-.108.222-.11.34v9.635l7.11-5.824-6.152-4.3z"/>
								</svg>
							</a></span>
							<span data-css-chip><a href="https://m.me/immatthamlin" className="escape" title="Message Me on Facebook">
								<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" className="social-icon social-icon--small social-icon--messenger">
									<path d="M8 0C3.582 0 0 3.316 0 7.407c0 2.332 1.163 4.41 2.98 5.77V16l2.725-1.495c.727.2 1.497.31 2.295.31 4.418 0 8-3.317 8-7.408C16 3.317 12.418 0 8 0zm.795 9.975L6.758 7.802 2.783 9.975l4.372-4.642 2.087 2.173 3.926-2.173-4.373 4.642z" fillRule="nonzero"/>
								</svg>
							</a></span>
					</div>
				<div data-css-chip><a href="https://twitter.com/immatthamlin">Twitter</a></div>
				<link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet"/>
		</div>
	)
};

export const PostFooter = (props) => {
	return (
		<section data-css-container data-css-footer-nav>
			<div>&copy; <a href="https://matthamlin.me">Matt Hamlin</a> 2016</div>
			<div>
				<span data-css-chip><a href="https://twitter.com/intent/tweet?&text=Hey+@immatthamlin" className="escape" title="Tweet Me, @immatthamlin">
					<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" className="social-icon social-icon--small social-icon--twitter">
						<path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.375-1.337.648-2.085.795-.598-.638-1.45-1.036-2.396-1.036-1.812 0-3.282 1.468-3.282 3.28 0 .258.03.51.085.75C5.152 5.39 2.733 4.084 1.114 2.1.83 2.583.67 3.147.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.416-.02-.617-.058.418 1.304 1.63 2.253 3.067 2.28-1.124.88-2.54 1.404-4.077 1.404-.265 0-.526-.015-.783-.045 1.453.93 3.178 1.474 5.032 1.474 6.038 0 9.34-5 9.34-9.338 0-.143-.004-.284-.01-.425.64-.463 1.198-1.04 1.638-1.7z" fillRule="nonzero"/>
					</svg>
				</a></span>
				<span data-css-chip><a href="sms:+14252100980" className="escape" title="Text Me">
					<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" className="social-icon social-icon--small social-icon--chat">
						<path d="M15.693 8.5c-.406-.92-1.172-1.65-2.06-2.1-1.57-.795-3.522-.79-5.086.02-1.088.558-1.995 1.558-2.253 2.775-.213.896-.022 1.86.453 2.64C7.454 13.01 8.732 13.76 10.06 14c.963.196 1.958.08 2.893-.19.56.218 1.06.57 1.605.83-.14-.47-.29-.937-.45-1.4.61-.434 1.163-.974 1.496-1.652.496-.945.526-2.115.09-3.087zM9.078 2.19c-1.663-.936-3.735-1.077-5.524-.43-1.175.423-2.24 1.21-2.897 2.28-.596.967-.82 2.172-.532 3.278.288 1.227 1.14 2.255 2.174 2.942-.195.566-.388 1.133-.57 1.703.656-.34 1.303-.695 1.956-1.04.786.25 1.613.372 2.438.345-.215-.63-.266-1.31-.168-1.968.157-.914.65-1.75 1.334-2.37 1.15-1.076 2.78-1.53 4.33-1.42-.29-1.423-1.29-2.626-2.542-3.32zm1.154 6.66c-.138.434-.77.565-1.076.234-.337-.306-.206-.946.236-1.082.49-.207 1.055.358.84.848zm3.197.06c-.17.392-.755.482-1.044.18-.14-.127-.174-.318-.23-.487.074-.305.278-.622.624-.636.478-.065.898.515.65.943zM8.66 4.608c.005.64-.85 1.04-1.33.606-.498-.357-.357-1.225.228-1.405.523-.207 1.142.234 1.1.798zm-4.04.162c-.114.557-.86.826-1.297.452-.506-.356-.364-1.24.23-1.42.582-.224 1.243.367 1.068.968z"/>
					</svg>
				</a></span>
				<span data-css-chip><a href="mailto:matthewjameshamlin@gmail.com" className="escape" title="Email Me">
					<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" className="social-icon social-icon--small social-icon--email">
						<path d="M15.89 2.847c-.193-.275-.572-.343-.848-.15L.11 13.154c.11.157.29.26.497.26h14.785c.336 0 .608-.273.608-.61V3.187c-.002-.117-.038-.235-.11-.34zM.958 2.697c-.275-.193-.655-.126-.848.15-.072.103-.108.222-.11.34v9.635l7.11-5.824-6.152-4.3z"/>
					</svg>
				</a></span>
				<span data-css-chip><a href="https://m.me/immatthamlin" className="escape" title="Message Me on Facebook">
					<svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeMiterlimit="1.414" className="social-icon social-icon--small social-icon--messenger">
						<path d="M8 0C3.582 0 0 3.316 0 7.407c0 2.332 1.163 4.41 2.98 5.77V16l2.725-1.495c.727.2 1.497.31 2.295.31 4.418 0 8-3.317 8-7.408C16 3.317 12.418 0 8 0zm.795 9.975L6.758 7.802 2.783 9.975l4.372-4.642 2.087 2.173 3.926-2.173-4.373 4.642z" fillRule="nonzero"/>
					</svg>
				</a></span>
			</div>
			<div><a href="/archive">Archive</a></div>
			<link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet"/>
		</section>
	)
};

export const PostHeader = (props) => {
	return (
		<section>
			<h2 className="🆕 ❌">{props.title}</h2>
			{props.subtitle ? <h3>{props.subtitle}</h3> : ''}
			<div className="🔧">
				<p className="❌">
						<span className="emoji-📆"></span>: {props.children}
				</p>
			</div>
		</section>
	)
};
