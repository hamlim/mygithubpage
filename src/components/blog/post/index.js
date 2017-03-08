import React, {Component} from 'react';
import Helmet from "react-helmet";
import 'whatwg-fetch';

import Anchor from '../../anchor';
import Header from '../../header/header';
import PostRenderer from './postrenderer';

import Photosv1 from '../posts/photosv1';
import Photosv2 from '../posts/photosv2';


// Specai posts:
const SpecialPosts = [
  {
    slug: 'Photos-v1',
    component: Photosv1,
    title: 'Photos v1'
  },
  {
    slug: 'Photos-v2',
    component: Photosv2,
    title: 'Photos v2'
  }
];

import styles from './post.css';

const Link = ({to, className, children}) => (
  <Anchor to={to} className={className ? className : styles.link}>{children}</Anchor>
);

class Post extends Component {
  constructor = (props) => {
    this.super(props);
    state = {
      feed: [],
      post: {},
      title: null,
      specialPost: {}
    }
    this.setState = this.setState.bind(this);
  }

  componentDidMount = () => {
    fetch('/assets/json/posts.json').then(r => {
      return r.json();
    }).then(feed => {
      this.setState({feed});
      SpecialPosts.forEach(post => {
        if (post.slug === this.props.params.slug) {
          this.setState({
            specialPost: post.component,
            title: post.title
          });
        }
      });
      if (!this.state.specialPost) {
        let post = feed.find(p => p.slug === this.props.params.slug);
        post && this.setState({post});
      }
    }).catch(err => console.warn(err));
  }

  chooseRenderMethod = () => {
    if (this.state.specialPost) {
      const StoryComponent = this.state.specialPost;
      return (<StoryComponent />)
    } else {
      return (<PostRenderer post={this.state.post} />)
    }
  }

  render = () => (
    <section className="Post">
      <Helmet
        link={[
          {"rel": "icon", "href": "/assets/memo.png"}
        ]}
      />
      <Header page="Post" />
      {(this.state && this.state.post) && (
        <div className={styles.wrapper}>
          <Helmet title={this.state.post.title} />
          <header className={styles.header}>
            <h2 className={styles.postTitle}>{this.state.post.title}</h2>
            <h4 className={styles.postDate}>Published: {`${this.state.post.day} of ${this.state.post.month}, ${this.state.post.year}`}.</h4>
          </header>
          <section className={styles.section}>
            <h4 className={styles.postTags}>Tags:</h4><br/>
            {this.state.post.tags.map((tag, index) => (
              <Link className={styles.tag} key={index} to={`/blog/tags/#${tag}`}>{tag}</Link>
            ))}
          </section>
          {this.chooseRenderMethod()}
        </div>
      )}
      {(this.state && this.state.specialPost) && (
        <div className={styles.wrapper}>
          <Helmet title={this.state.title} />
          {this.chooseRenderMethod()}
        </div>
      )}
      { !this.state && (
        <div className={styles.loading}>🕐</div>
      )}
    </section>
  )
}

export default Post;
