import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="Contact content" id="contact">
          <h1>Say Hello! <span role="img" aria-label="hello">👋</span></h1>
          <h5>Need anything built, want to work together or simply want to have a chat?<br/>
             Drop me an e-mail at hardikkhandelwal500@gmail.com or simply fill out the form below and I will reply to you soon!
          </h5>
          <form>
            <div className="wrap">
    					<b><span className="label">Your Name</span></b>
    					<input className="input" type="text" name="name" placeholder="Enter your name" required/>
              <span className="focus-input"></span>
    				</div>

    				<div className="wrap">
    					<span className="label">Email</span>
    					<input className="input" type="email" name="email" placeholder="Enter your email addess" required/>
              <span className="focus-input"></span>
    				</div>

            <div className="wrap">
    					<span className="label">Message</span>
    					<textarea className="input" name="message" placeholder="Your message here..." required></textarea>
              <span className="focus-input"></span>
    				</div>

            <div className="submit">
              <button className="msg-btn" type="submit"> Send Message <span role="img" aria-label="hello">😊</span></button>
            </div>
          </form>
          <br/>
          <div className="scroll-next">
            <div className="last arrow-bounce bounce">
              <a href="#portfolio" id="reverse"><svg viewBox="0 0 514.3589477539062 491.5210266113281"><path fill="#000" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg></a>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
