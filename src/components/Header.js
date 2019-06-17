import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="sides nav-right" id="navbar">
           <a href="#about" className="menu">About</a>
           <a href="#portfolio" className="menu">Portfolio</a>
           <a href="#cont" className="menu">Contact</a>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
