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
      <div>&copy; <a href="https://matthamlin.me">Matt Hamlin</a> 2016</div>
      <div>
          <span><a href="https://twitter.com/intent/tweet?&text=Hey+@immatthamlin" className="emoji-🐦 escape" title="Tweet Me"></a></span>
          <span><a href="sms:+14252100980" className="emoji-☎ escape" title="Text Me"></a></span>
          <span><a href="mailto:matthewjameshamlin@gmail.com" className="emoji-✉ escape" title="Email Me"></a></span>
          <span><a href="https://m.me/immatthamlin" className="emoji-💬 escape" title="Message Me"></a></span>
      </div>
      <div><a href="/archive">Archive</a></div>
      <link href="https://fonts.googleapis.com/css?family=Quicksand:400,700" rel="stylesheet" />
    </div>
  )
}
