import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__links">
        <div className="footer__column">
          <h4>Get to Know Us</h4>
          <a href="#">Careers</a>
          <a href="#">Blog</a>
          <a href="#">About Amazon</a>
          <a href="#">Investor Relations</a>
        </div>
        <div className="footer__column">
          <h4>Make Money with Us</h4>
          <a href="#">Sell on Amazon</a>
          <a href="#">Amazon Business</a>
          <a href="#">Affiliate Program</a>
        </div>
        <div className="footer__column">
          <h4>Amazon Payment Products</h4>
          <a href="#">Amazon Rewards Visa</a>
          <a href="#">Shop with Points</a>
        </div>
        <div className="footer__column">
          <h4>Let Us Help You</h4>
          <a href="#">Your Account</a>
          <a href="#">Shipping Rates & Policies</a>
          <a href="#">Returns & Replacements</a>
          <a href="#">Help</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2024, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default Footer;
