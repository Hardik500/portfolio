import React from 'react';

class About extends React.Component {
  render() {
    return (
      <section className="About content" id="about">
        <h1>About</h1>
        <p>
          I love everything that is <span className="highlight">tech</span> related.
        </p>
        <p>
          <span className="highlight">Javascript</span> and <span className="highlight">Python</span> are the languages in which I love working on the most.
          <br/>
          During my free time, I love to scroll the web and continuously update myself with new information.
        </p>
        <p>
          My main problem is I am incapable of sticking to a single technology. It may be a framework, a library or even a new technology if it is to my liking I will definitely try it out.
        </p>
        <p>
          I tried to make this portfolio without any framework or libraries (except React though). And since I have just started learning React, I decided to use it as much as I can.
        </p>
        <div className="scroll-next">
          <div className="arrow-bounce bounce">
            <a href="#portfolio"><svg viewBox="0 0 514.3589477539062 491.5210266113281"><path fill="#000" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
