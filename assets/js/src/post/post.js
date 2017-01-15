import React, {Component} from 'react';

import marked from 'marked';

import './post.css';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      markdown: ''
    }
  };

  componentDidMount = () => {
    let postUrl = `/raw/${this.props.year}/${this.props.month}/${this.props.title}`;
    window.fetch(postUrl).then(data => {
      data.text().then(md => {
        this.setState({
          loading: false,
          markdown: md
        });
      });
    }).catch(err => console.warn(err));
  };

  render = () => (
    <article className={ this.state.loading ? 'loader' : 'Post'} dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}></article>
  )
}


export default Post;
