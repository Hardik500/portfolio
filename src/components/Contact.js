import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="Contact content" id="contact">
          <h1>Say Hello!</h1>
          <h5>Need anything built, want to work together or simply want to have a chat?<br/>
             Drop me an e-mail at <a href="mailto:hardikkhandelwal500@gmail.com">hardikkhandelwal500@gmail.com</a> or simply fill out the form below and I will reply to you soon!
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
        </section>
      </React.Fragment>
    );
  }
}

export default Contact;
