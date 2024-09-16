import React from 'react';
import '../index.css'

interface Props {
  
}

const NavBar: React.FC<Props> = ({  }) => {
  return (
    <nav className='brown lighten-3 nav'>
    <div className="">
      <a href="#" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">HOME</a></li>
        <li><a href="badges.html">ABOUT</a></li>
        <li><a href="collapsible.html">CONTACT</a></li>
      </ul>
    </div>
  </nav>
  );
};

export default NavBar;