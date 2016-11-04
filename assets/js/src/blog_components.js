import React from 'react';


export const PostHeader = (props) => {
  return (
    <div className="🚀">
      <h1 className="🚀-🍇">{props.title}</h1>
      <h3 className="🚀-🍈">{props.subtitle}</h3>
      <p className="🚀-🍌">Published <time dateTime={props.timestamp}><a href="/" className="🚲">{props.month}</a> {props.datestring}</time></p>
      <p className="🚀-🍎"><a className="🚀-🌮" href={"./tags/" + props.tag}>{props.tag}</a></p>
    </div>
  )
};


export const PostFooter = (props) => {
  return (
    <div className="blog-footer">
      <div className="chip">&copy; <a href="https://matthamlin.me" className="link">Matt Hamlin</a> 2016</div>
      <div className="wrapper">
        <span className="chip"><a href="https://twitter.com/intent/tweet?&text=Hey+@immatthamlin" className="link" data-css-emoji="twitter" title="Tweet Me"></a></span>
        <span className="chip"><a href="sms:+14252100980" className="link" data-css-emoji="phone" title="Text Me"></a></span>
        <span className="chip"><a href="mailto:matthewjameshamlin@gmail.com" className="link" data-css-emoji="email" title="Email Me"></a></span>
        <span className="chip"><a href="https://m.me/immatthamlin" className="link" data-css-emoji="fbm" title="Message Me"></a></span>
      </div>
      <div className="chip"><a href="/archive" className="link">Archive</a></div>
    </div>
  )
}
