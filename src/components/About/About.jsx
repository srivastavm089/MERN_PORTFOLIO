import React from "react";
import "../About/about.css";
import { Typography } from "@mui/material";
import { image } from "../../images";
const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>this is sample code</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={image} alt="image" className="about-avatar" />
          <Typography
            variant="h4"
            style={{
              margin: "1vmax 0 ",
              color: "black",
            }}
          >
            Abhay
          </Typography>
          <Typography>Mern Stack Developer</Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "40px",
              letterSpacing: "5px",
              textAlign: "center",
              wordWrap:"wrap"
            }}
          >
            A MERN stack developer excels in crafting dynamic web applications
            by leveraging MongoDB for data storage, Express.js for backend API
            development, React.js for interactive user interfaces, and Node.js
            for server-side execution, ensuring robust, scalable, and responsive
            online experiences
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
