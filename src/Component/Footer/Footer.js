import React from "react";
import Logo from "../Images/logo.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="ftr-subcription">
        <div className="logo-ftr">
          <img alt="logo" className="ftr-logo" src={Logo} />
        </div>
        <div className="footer-subs">
          <p className="title-md">
            Trade Alert - Delivering the latest product trends and industry news
            straight to your inbox.
          </p>
          <form className="footer-form">
            <input
              className="email-input"
              type="email"
              placeholder="e.g.  example@email.com"
            />
            <input className="btn-email" type="submit" />
          </form>
          <p className="title-ls">
            We’ll never share your email address with a third-party.
          </p>
        </div>
      </div>
      <div className="menu-footer">
        <div className="abt-cs">
          <div>
            <p className="footer-title">About Us</p>
            <Link to=''>
              <p className="footer-des">About QuickrBD.com</p>
            </Link>
            <Link to=''>
              <p className="footer-des">About QuickrBD Group</p>
            </Link>
            <Link to=''>
              <p className="footer-des">Sitemap</p>
            </Link>
          </div>
          <div>
            <p className="footer-title">Customer Services</p>
            <Link to=''>
              <p className="footer-des">Help Center</p>
            </Link>
            <Link to=''>
              <p className="footer-des">Contact Us</p>
            </Link>
            <Link to=''>
              <p className="footer-des">Report Abuse</p>
            </Link>
            <Link to=''>
              <p className="footer-des">Submit a Dispute</p>
            </Link>
            <Link to=''>
              <p className="footer-des">Policies & Rules</p>
            </Link>
            <Link to=''>
              <p className="footer-des">Get Paid for Your Feedback</p>
            </Link>
          </div>
        </div>
        <div className="menu_-footer">
          <Link to=''>
            <p className="footer-des_menu">Help Center</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Contact Us</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Help Center</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Contact Us</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Help Center</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Contact Us</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Help Center</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Contact Us</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Help Center</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Contact Us</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Help Center</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Contact Us</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Help Center</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Contact Us</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Help Center</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Contact Us</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Help Center</p>
          </Link>
          <Link to=''>
            <p className="footer-des_menu">Contact Us</p>
          </Link>

        </div>
      </div>
      <div className="footer-lst">
        <div className='down-social'>
          <div className="download">
            <p className="title-md dwnld">Download :</p>
            <Link to="">
              <i className="fab fa-android"></i>
            </Link>
            <Link to="">
              <i className="fab fa-apple"></i>
            </Link>
          </div>
          <div>
          <div className="download">
            <p className="title-md dwnld">Follow Us On :</p>
            <Link to="">
            <i className="fab fa-facebook-square"></i>
            </Link>
            <Link to="">
            <i className="fab fa-twitter-square"></i>
            </Link>
            <Link to="">
            <i className="fab fa-youtube"></i>
            </Link>
            <Link to="">
            <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="">
            <i className="fab fa-instagram"></i>
            </Link>
          </div>
          </div>
        </div>
        <div className='pptu_div'>
          <Link className='pptu' to="">Privacy Policy</Link>
          <Link className='pptu' to="">User Information Legal Enquiry Guide</Link>
          <Link className='pptu' to="">Terms of Use</Link>
        </div>
  <p className='footer-c'>© 1999-<span>{new Date().getFullYear()}</span> QuickrBD .com. All rights reserved. Design and Developed by <a className='linkcare' href='https://www.bestitcare.com'>BestITCare</a> Foundation</p>
      </div>
    </div>
  );
}
