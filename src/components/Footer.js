import React from "react";
import { Link } from 'react-router-dom'

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="container-fluid bg-primary py-1">
        {/* row 1 */}
        <div class="row footer-up">
          {/* col 1 */}
          <div class="col-sm-6 left-side">
            <h4 class="typography">Think Code Sleep</h4>

            <p>
                is a platform to show off my portfolio as a self-taught developer.
                The works I've created such as <br></br> <kbd>Responsive Web Development</kbd>,
                <kbd>MERN Stack</kbd>, <br></br>
                <kbd>Data Science</kbd>, <kbd>Machine Learning</kbd>, 
                and <kbd>HTLM/CSS</kbd>
                <br></br>
                I am very glad to have your feedback, so please do not hesitate to contact me.
            </p>
            <footer
              class="blockquote-footer"
              style={{ color: "white", fontStyle: "italic" }}
            >
              Muhammad Ridwan
            </footer>
            <p class="location"><i class="fas fa-map-marker-alt"></i> Jakarta, Indonesia</p>
          </div>

          {/* col 2 */}
          <div class="col-sm-3 quick-link">
            <h5>Quick Links</h5>
            <ul class="responsive-link">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/skill">Skills</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/hireme">Hire Me</Link></li>
            </ul>
          </div>

          {/* col 3 */}
          <div class="col-sm-3 contact-link">
            <h5>Contact Us</h5>
            <ul class="responsive-contact">
                <li><a href="https://wa.link/9f3dxk"><i class="fab fa-whatsapp"></i>Whatsapp</a></li>
                <li><a href="https://msng.link/o/?ridwan30=tg"><i class="fab fa-telegram"></i>Telegram</a></li>
                <li><a href="mailto:thinkcodesleep@gmail.com"><i class="fas fa-envelope"></i>Email</a></li>
            </ul>
          </div>
        </div>
        {/* row 2 */}
        <div class="row footer-1">
          <ul class="social_footer_ul">
            <li>
              <a href="http://webenlance.com">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
          <p>Copyright&copy; 2021 | Think Code Sleep</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
