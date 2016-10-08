import React from 'react';

export class Nav extends React.Component {
	render() {
		return (
			<ul className="nav--links ul--nostyle ul--inline">
        <li className="li--inline">
          <a href="./index.html" className='link--active'>Portfolio</a>
        </li> 
        <li className="li--inline">
          <a href="./resume.html" className='link'>Resume</a>
        </li> 
        <li className="li--inline">
          <a href="./archive.html" className='link'>Blog</a>
        </li>
      </ul>
		);
	}
}

