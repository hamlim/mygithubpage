import React from 'react';
import ReactDOM from 'react-dom';
import { PostHeader, PostFooter, TagContainer, Tag, StyledFloatedQuoteContainer } from './assets/js/src/components';
import { Lightbox } from './assets/js/src/reactlightbox';
import { ColorCards } from './assets/js/src/colorcards';
var post_css = require('./assets/css/central.css');

const DOCID = document.body.getAttribute('data-post-id');

switch (DOCID) {
  case '1':
    ReactDOM.render(
      <PostHeader title="something" subtitle="something" timestamp="2016-10-24" month="October" datestring="24th, 2016" tag="Personal" />,
      document.getElementById('headerMount')
    );
    break;
  case '2':
    ReactDOM.render(
      <PostHeader title="demo" subtitle="Test">
        <time dateTime="2016-11-10"><a href="./" >November</a> 10th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '3':
    ReactDOM.render(
      <PostHeader title="I Voted">
        <time datetime="2016-11-08"><a href="./" >November</a> 8th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '4':
    ReactDOM.render(
      <PostHeader title="The American Fall of 2016">
        <time dateTime="2016-11-09"><a href="./" >November</a> 9th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '5':
    ReactDOM.render(
      <PostHeader title="We're Not Fucked*" subtitle="*(completely)">
        <time dateTime="2016-11-09"><a href="./" >November</a> 10th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '6':
    ReactDOM.render(
      <PostHeader title="Don't Force It">
        <time dateTime="2016-11-10"><a href="./" >November</a> 10th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '7':
    ReactDOM.render(
      <PostHeader title="Recent Work">
        <time dateTime="2016-11-11"><a href="./" >November</a> 11th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '8':
    ReactDOM.render(
      <PostHeader title="That First Fucking Step">
        <time dateTime="2016-11-18"><a href="./" >November</a> 18th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '9':
    ReactDOM.render(
      <PostHeader title="Links">
        <time dateTime="2016-11-19"><a href="./" >November</a> 19th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '10':
    ReactDOM.render(
      <PostHeader title="The Future of Consumer VR">
        <time dateTime="2016-11-20"><a href="./" >November</a> 20th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    let imagearray = [
      {
        img: '/assets/images/posts/daydream/Photos/0.jpg',
        caption: 'The box it came in'
      },
      {
        img: '/assets/images/posts/daydream/Photos/1.jpg',
        caption: 'The Daydream View'
      },
      {
        img: '/assets/images/posts/daydream/Photos/2.jpg',
        caption: 'Another angle of the Daydream View'
      },
      {
        img: '/assets/images/posts/daydream/Photos/3.jpg',
        caption: 'The front flap of the Daydream View'
      },
      {
        img: '/assets/images/posts/daydream/Photos/4.jpg',
        caption: 'The Daydream View controller'
      },
      {
        img: '/assets/images/posts/daydream/Photos/5.jpg',
        caption: 'The Daydream View controller in the Daydream View for storage'
      }
    ];
    ReactDOM.render(
      <Lightbox images={imagearray} title="Daydream View" />,
      document.getElementById('reactLightboxMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '11':
    ReactDOM.render(
      <PostHeader title="Government is Broken">
        <time dateTime="2016-11-20"><a href="./" >November</a> 20th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '12':
    ReactDOM.render(
      <PostHeader title="Quit Complaining">
        <time dateTime="2016-11-24"><a href="./" >November</a> 24th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '13':
    ReactDOM.render(
      <PostHeader title="Color Cards">
        <time dateTime="2016-11-29"><a href="./" >November</a> 29th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    window.fetch('/Assets/json/colors.json').then(function (response) {
      return response.json().then((jsonResponse) => {
        ReactDOM.render(
          <ColorCards colors={jsonResponse} />,
          document.getElementById('ColorCards')
        );
      });
    });
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '14':
    ReactDOM.render(
      <PostHeader title="November Recap">
        <time dateTime="2016-12-04"><a href="./" >December</a> 4th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '15':
    ReactDOM.render(
      <PostHeader title="CSS Feature Locks" subtitle="Wait what?">
        <time dateTime="2016-12-08"><a href="./" >December</a> 8th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '16':
    ReactDOM.render(
      <PostHeader title="CSS in JSX Limitations" subtitle="Wait what?">
        <time dateTime="2016-12-13"><a href="./" >December</a> 13th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '17':
    ReactDOM.render(
      <PostHeader title="The Macbook Pro">
        <time dateTime="2016-12-16"><a href="./" >December</a> 16th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '18':
    ReactDOM.render(
      <PostHeader title="Paralysis">
        <time dateTime="2016-12-20"><a href="./" >December</a> 20th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '19':
    ReactDOM.render(
      <PostHeader title="Drained">
        <time dateTime="2016-12-26"><a href="./" >December</a> 26th, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="burnout">Burnout</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '20':
    ReactDOM.render(
      <PostHeader title="2017">
        <time dateTime="2016-12-31"><a href="./" >December</a> 31st, 2016</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="summary">Summary</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '21':
    ReactDOM.render(
      <PostHeader title="One">
        <time dateTime="2017-01-01"><a href="./" >January</a> 1st, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '22':
    ReactDOM.render(
      <PostHeader title="Two">
        <time dateTime="2017-01-02"><a href="./" >January</a> 2nd, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '23':
    ReactDOM.render(
      <PostHeader title="Three">
        <time dateTime="2017-01-03"><a href="./" >January</a> 3rd, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '24':
    ReactDOM.render(
      <PostHeader title="Four">
        <time dateTime="2017-01-04"><a href="./" >January</a> 4th, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '25':
    ReactDOM.render(
      <PostHeader title="Five">
        <time dateTime="2017-01-05"><a href="./" >January</a> 5th, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '26':
    ReactDOM.render(
      <PostHeader title="Social Networks">
        <time dateTime="2017-01-05"><a href="./" >January</a> 5th, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <StyledFloatedQuoteContainer />,
      document.getElementById('blockquote-container')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="social">Social</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '27':
    ReactDOM.render(
      <PostHeader title="Six">
        <time dateTime="2017-01-06"><a href="./" >January</a> 6th, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '28':
    ReactDOM.render(
      <PostHeader title="Seven">
        <time dateTime="2017-01-07"><a href="./" >January</a> 7th, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '29':
    ReactDOM.render(
      <PostHeader title="Eight">
        <time dateTime="2017-01-08"><a href="./" >January</a> 8th, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '30':
    ReactDOM.render(
      <PostHeader title="Nine">
        <time dateTime="2017-01-09"><a href="./" >January</a> 9th, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '31':
    ReactDOM.render(
      <PostHeader title="Ten">
        <time dateTime="2017-01-10"><a href="./" >January</a> 10th, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '32':
    ReactDOM.render(
      <PostHeader title="Eleven">
        <time dateTime="2017-01-11"><a href="./" >January</a> 11th, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
  case '33':
    ReactDOM.render(
      <PostHeader title="Twelve">
        <time dateTime="2017-01-12"><a href="./" >January</a> 12th, 2017</time>
      </PostHeader>,
      document.getElementById('headerMount')
    );
    ReactDOM.render(
      <TagContainer title="Tags:">
        <Tag href="daily">Daily</Tag>
      </TagContainer>,
      document.getElementById('tagMount')
    );
    ReactDOM.render(
      <PostFooter />,
      document.getElementById('footerMount')
    );
    break;
}
