import React from 'react';
import styled from 'styled-components';

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
			<li data-css-li-inline className="li--inline">
				<a href="./tags.html" className={props.tags ? "link active": "link"}>Tags</a>
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
			<li key={index} data-css-li>{article.title} - <a href={`./Posts/${props.year}/${props.month}/${article.link}`} data-css-link>Read Here</a></li>
		); });
  return (
		<ul>
			<h5 data-css-tac><a href={`./Posts/${props.year}/${props.month}`} data-css-link>{props.month} {props.year}:</a></h5>
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
	let now = new Date();
	return (
		<div data-css-container data-css-footer-nav>
				<div data-css-chip>&copy; <a href="https://matthamlin.me">Matt Hamlin</a> {now.getFullYear()}</div>
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
	let now = new Date();
	return (
		<section data-css-container data-css-footer-nav>
			<div>&copy; <a href="https://matthamlin.me">Matt Hamlin</a> {now.getFullYear()}</div>
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
						<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 64 64" className="svg-reset"><path fill="#BA9372" d="M58.099 19.593C48.347 13.626 33.076 4.75 30.98 4.75c-2.092 0-16.702 8.874-26.011 14.838l-.482-.857C6.879 17.198 27.956 3.75 30.98 3.75c3.02 0 25.081 13.443 27.585 14.976l-.466.867z"/><path fill="#93A2AA" d="M62 56.791c0 1.635-1.22 2.959-2.726 2.959H6.769c-1.506 0-2.728-1.324-2.728-2.959V21.119c0-1.635 1.221-2.959 2.728-2.959h52.505c1.506 0 2.726 1.324 2.726 2.959v35.672z"/><path fill="#ED4C5C" d="M59.96 21.119c0-1.635-1.222-2.959-2.728-2.959H4.728C3.221 18.16 2 19.484 2 21.119v9.456h57.96v-9.456z"/><path fill="#D9E3E8" d="M2 30.574v26.217c0 1.635 1.221 2.959 2.728 2.959h52.505c1.506 0 2.728-1.324 2.728-2.959V30.574H2z"/><path fill="#93A2AA" d="M4.517 32.958h5.964v2.219H4.517zM12.344 32.958h5.964v2.219h-5.964zM20.17 32.958h5.965v2.219H20.17zM27.998 32.958h5.964v2.219h-5.964zM35.825 32.958h5.964v2.219h-5.964zM43.652 32.958h5.964v2.219h-5.964zM51.479 32.958h5.964v2.219h-5.964zM27.998 37.396h5.964v2.219h-5.964zM35.825 37.396h5.964v2.219h-5.964zM43.652 37.396h5.964v2.219h-5.964zM51.479 37.396h5.964v2.219h-5.964zM4.517 41.833h5.964v2.221H4.517zM12.344 41.833h5.964v2.221h-5.964zM20.17 41.833h5.965v2.221H20.17zM27.998 41.833h5.964v2.221h-5.964zM35.825 41.833h5.964v2.221h-5.964zM43.652 41.833h5.964v2.221h-5.964zM51.479 41.833h5.964v2.221h-5.964zM4.517 46.271h5.964v2.219H4.517zM12.344 46.271h5.964v2.219h-5.964zM20.17 46.271h5.965v2.219H20.17zM27.998 46.271h5.964v2.219h-5.964zM35.825 46.271h5.964v2.219h-5.964zM43.652 46.271h5.964v2.219h-5.964zM51.479 46.271h5.964v2.219h-5.964zM4.517 50.709h5.964v2.221H4.517zM12.344 50.709h5.964v2.221h-5.964zM20.17 50.709h5.965v2.221H20.17zM27.998 50.709h5.964v2.221h-5.964zM35.825 50.709h5.964v2.221h-5.964zM43.652 50.709h5.964v2.221h-5.964zM51.479 50.709h5.964v2.221h-5.964zM4.517 55.148h5.964v2.219H4.517zM12.344 55.148h5.964v2.219h-5.964zM20.17 55.148h5.965v2.219H20.17zM27.998 55.148h5.964v2.219h-5.964zM35.825 55.148h5.964v2.219h-5.964zM43.652 55.148h5.964v2.219h-5.964z"/><g><ellipse fill="#333" cx="31.197" cy="6.25" rx="1.823" ry="1.945"/></g><g><ellipse fill="#93A2AA" cx="30.98" cy="6.25" rx="1.824" ry="1.945"/></g><g><path fill="#FFF" d="M19.498 25.547v.18c.014.604.075 1.027.184 1.272.11.246.344.368.704.368.356 0 .591-.134.706-.402.069-.159.102-.427.102-.804v-5.455h1.607v5.428c0 .663-.11 1.188-.331 1.577-.375.656-1.05.984-2.026.984-.977 0-1.631-.265-1.965-.796-.333-.531-.5-1.255-.5-2.172v-.18h1.519zM24.503 20.707h1.634v4.789c0 .536.063.927.187 1.174.194.437.617.656 1.269.656.647 0 1.069-.219 1.264-.656.124-.247.187-.638.187-1.174v-4.789h1.633V25.5c0 .829-.127 1.475-.38 1.937-.472.847-1.375 1.27-2.704 1.27-1.331 0-2.233-.423-2.71-1.27-.253-.462-.38-1.107-.38-1.937v-4.793zM32.223 20.707h1.607v6.396h3.841v1.402h-5.448v-7.798zM42.158 20.707h1.822l-2.573 4.875v2.924h-1.608v-2.924l-2.661-4.875h1.896l1.598 3.397 1.526-3.397z"/></g></svg>: {props.children}
				</p>
			</div>
		</section>
	)
};

export const TagContainer = (props) => {
	return (
		<div className="Tag-container">
			<h5 className="Tag-title">{props.title}</h5>
			{props.children}
		</div>
	);
};

const PreStyledTag = (props) => {
	return (
		<a className={`escape ${props.className}`} href={"/tags#" + props.href}>
			{props.children}
		</a>
	)
};

export const Tag = styled(PreStyledTag)`
	all: unset;
	display: inline-flex;
	background-color: var(--a);
	border-radius: .25em;
	text-decoration: none;
	padding: 0 .5em;
	transition: all .5s ease;
	color: var(--black);

	&:before {
		content: '#';
		display: inline-block;
		padding-right: .25em;
	}

	&:hover,
	&:focus {
		background-color: var(--c);
		transition: all .5s ease;
	}
`;



// Tags

export const TagApp = (props) => {
	let tags = props.tags;
	let taggedPosts = props.taggedPosts;
	let tagsHtml = tags.map((tag, index) => {
		return (
			<ul key={index} className="Tag-wrapper">
				<h4 className="Tag-title" id={tag.toLowerCase()}>{tag}</h4>
				{taggedPosts.map((post, index) => {
					if (post.tag === tag) {
						return (
							<li className="Tag-item" key={index}><a href={post.link}>{post.name}</a></li>
						);
					}
				})}
			</ul>
		)
	}) 
	return (
		<section>
			{tagsHtml}
		</section>
	)
};

const FloatedQuote = (props) => {
	return (
		<blockquote className={`${props.className}`}>
			<p>
				The future of social media is in conversations.
			</p>
		</blockquote>
	)
};

const FloatedQuoteStyled = styled(FloatedQuote)`
	float: left;
	margin: .5em .5em .5em 0;
	& > p {
		width: 15rem;
		padding: .25em;
		text-align: center;
	}
`;


const FloatedQuoteContainer = (props) => {
	return (
		<section className={`${props.className}`}>
			<h4>Conversations</h4>
			<p>
				I honestly think if Twitter was more conversation orientated than it would be 10 times more popular for a lot more users, when you compare monthly active users on messaging apps 
				to Twitter, it makes it look like a small side project/hobby rather than a publicly traded company. 
			</p>
			<FloatedQuoteStyled />
			<p>
				This bundles really well into my final point as well, if Twitter built a better conversational interface rather than a megaphone I think it would build better communities as well 
				as foster more interactivity.
			</p>
		</section>
	)
};

export const StyledFloatedQuoteContainer = styled(FloatedQuoteContainer)`
	&:after {
		content: '';
		clear: both;
		display: table;
	}
`;