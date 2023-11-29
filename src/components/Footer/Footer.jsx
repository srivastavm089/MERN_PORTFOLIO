import React from "react";
import "../Footer/footer.css";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { AiFillFacebook, AiFillLinkedin } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography>Let's Connect</Typography>
        <Link to="/contact" className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/srivastavm089" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/abhay-kumar-srivastava-b260a6236/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://www.facebook.com/abhay.srivastav.98229"
          target="_blank"
        >
          <AiFillFacebook />
        </a>
      </div>
    </div>
  );
};

export default Footer;
