import React from 'react';

class Footer extends React.Component {
  topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  render() {
    return (
      <React.Fragment>
      <section className="Footer">
        <div className="footer">
          Made with <span role="img">❤️</span> by <a href="https://www.github.com/hardik500">Hardik Khandelwal</a>
        </div>
      </section>
      <span onClick={this.topFunction} title="Go to top">
        <div className="center-con arrow-bounce" id="toTop">
          <div className="round">
            <div id="cta">
              <span className="arrow primera next "></span>
              <span className="arrow segunda next "></span>
            </div>
          </div>
        </div>
      </span>
    </React.Fragment>
    );
  }
}

export default Footer;
