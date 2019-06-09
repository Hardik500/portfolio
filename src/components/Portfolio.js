import React from 'react';

class Portfolio extends React.Component {
  render() {
    return (
      <section className="Portfolio content" id="portfolio">
        <h1>Portfolio</h1>
        <div className="skills">
          <h2>Technical Skills</h2>
          <div className="items">
            <div className="item">NodeJS</div>
            <div className="item">Javascript</div>
            <div className="item">Python</div>
            <div className="item">MongoDB</div>
            <div className="item">Git</div>
            <div className="item">ReactJS</div>
            <div className="item">PHP</div>
            <div className="item">Java</div>
          </div>
        </div>
        <div className="projects">
          <h2>Projects</h2>
          <div className="blocks">
            <div className="block yelpcamp">
              <div className="portfolio-item__title">YelpCamp</div>
              <div className="portfolio-item__desc">This is a simple website for adding and viewing your favorite campgrounds.</div>
              <div><img className="portfolio-item__icon" src="https://cdn.freebiesupply.com/logos/large/2x/nodejs-icon-logo-black-and-white.png" alt="NodeJS"/>
              </div>
              <div className="portfolio-item__links">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Hardik500/YelpCamp">More</a>
              </div>
            </div>
            <div className="block">
              <div className="portfolio-item__title">Telegram Bot</div>
              <div className="portfolio-item__desc">A telegram bot for fetching Cyanide & Happiness comics from explosm.net</div>
              <div><img className="portfolio-item__icon" src="https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-black-and-white.png" alt="Python"/></div>
              <div className="portfolio-item__links">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Hardik500/Telegram-Bot">More</a>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-next">
          <div className="arrow-bounce bounce port_arrow">
            <a href="#cont"><svg viewBox="0 0 514.3589477539062 491.5210266113281"><path fill="#fff" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg></a>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
