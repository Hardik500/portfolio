import React from 'react';

import Header from './Header';
import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="main" id="title">
        <div className="header">
          <Header />
          <Intro />
        </div>
        <About />
        <Portfolio />
        <div className="cont" id="cont">
          <Contact />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
