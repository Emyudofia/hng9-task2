import Footer from "./Footer"
import '../App.css';


const Contact = () => {
    return (
      <>
        <div className="contact-wrap">
          <div className="contact-div">
            <div className="contact-me">
              <div className="title">Contact Me</div>
              <div className="subtitle">
                Hi there, contact me to ask me about anything you have in mind.
              </div>
            </div>
            <div className="contact-details">
              <form>
                <div className="last">
                  <div className="input-flex">
                  <label for="lname" className="label">Last name</label>
                  <br />
                  <input
                    type="text" id="lname"
                    name="fname" placeholder="Enter your last name"
                  />
                  </div>
                  
                  <div className="input-flex" id="first">
                  <label for='fname' className="label">First name</label><br />
                  <input type='text' id='fname' name="name" placeholder="Enter your first name"/>
                  </div>
                </div>
                <label for='email' className="label">Email</label><br />
                <input type='text' id='fname' placeholder='yourname@email.com'/>
                <label for='message' className="label">Message</label><br />
                <textarea id="message" placeholder="Send me a message and I'll reply you as soon as possible..." className="textarea" required/>
                <div className="box">
                  <input type="checkbox" name="checkbox" className="check"/>
                  <label className="check-label">You agree to providing your data to Emediong who may contact you.</label>
                </div>
                <button type="submit" className="message-button">
              Send message
                </button>
              </form>
            </div>
          </div>
          </div>
          <div>
          <Footer />
        </div>
        
        
      </>
    );
  };
  export default Contact;