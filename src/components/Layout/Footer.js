import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h4 className="text-center">
        Ecom Shopping Store &copy; Obaid Ur Rehman{" "}
      </h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">PrivacyPolicy</Link>
      </p>
    </div>
  );
};

export default Footer;
