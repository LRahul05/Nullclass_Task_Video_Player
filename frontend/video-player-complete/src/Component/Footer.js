import React from 'react';
import { FaMapMarker, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer className="footer-distributed">
          <div className="footer-left">
            <h3>Custom <span>Video Player</span></h3>
            <p className="footer-links">
              <a href="/Home">Home</a>
              |
              <a href="/AboutSection">About</a>
              
              
            </p>
            <p className="footer-company-name">Copyright © 2023 <strong>Rahul L </strong> ©  All rights reserved</p>
          </div>
          <div className="footer-center">
            <div>
              <FaMapMarker  color='white'/>
              <p>Vellore</p>
            </div>
            <div>
              <FaPhone color='white'/>
              <p>+91 996**3*2*8</p>
            </div>
            <div>
              <FaEnvelope color='white'/>
              <p><a href="mailto:rahul00001.co@gmail.com">xyz@gmail.com</a></p>
            </div>
          </div>
          <div className="footer-right">
            <p className="footer-company-about">
              <span>About the company</span>
              This Video Player is created by <strong>Rahul L </strong>for Nullclass Intenship Task.
                    
            </p>
            <div className="footer-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedin /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
