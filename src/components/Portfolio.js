import React from "react";

import PortfolioBlock from "./PortfolioBlock";

const Portfolio = () => {
  return (
    <section className="Portfolio content" id="projects">
      <h1>Projects</h1>
      <div className="projects">
        <div className="blocks">
          <PortfolioBlock
            title="Xmeme"
            description="A meme application where anyone can view, post, and update memes"
            logo="react-1-logo-black-and-white.png"
            tech="ReactJS"
            github_url="https://github.com/Hardik500/Bookr"
          />
          <PortfolioBlock
            title="reddit-redefined"
            description="reddit: But with a bit of twist of UI supports only voting of
              posts"
            logo="react-1-logo-black-and-white.png"
            tech="ReactJS"
            github_url="https://github.com/Hardik500/reddit-redefined"
          />
          <PortfolioBlock
            title="Bookr"
            description="A Movie Booking Site made with PHP and MySQL"
            logo="php-logo-black-and-white.png"
            tech="PHP"
            github_url="https://github.com/Hardik500/Bookr"
          />
          <PortfolioBlock
            title="YelpCamp"
            description="Website for performing CRUD functions for campgrounds"
            logo="nodejs-icon-logo-black-and-white.png"
            tech="NodeJS"
            github_url="https://github.com/Hardik500/YelpCamp"
          />
          <PortfolioBlock
            title="Telegram Bot"
            description="A telegram bot for fetching Cyanide & Happiness comics from
            explosm.net"
            logo="python-5-logo-black-and-white.png"
            tech="Python"
            github_url="https://github.com/Hardik500/Telegram-Bot"
          />
        </div>
        <hr />
        <div className="portfolio-item__logos">
          <a href="https://codepen.io/hardik500" target="_b">
            <img src={require("../images/tech_logos/CodePen.png")} alt="CodePen"/> Check out
            my CodePen
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
