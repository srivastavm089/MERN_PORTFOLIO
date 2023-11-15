import React, { useEffect } from "react";
import "../About/about.css";
import { Typography } from "@mui/material";
import { image } from "../../images";

const About = ({about}) => {

  return (
    <>
      <div className="about">
        <div className="aboutContainer">
          <Typography>{about.about.quote}</Typography>
        </div>
        <div className="aboutContainer2">
          <div>
            <img
              src={about.about.avatar.url}
              alt="image"
              className="about-avatar"
            />

            <Typography
              variant="h4"
              style={{
                margin: "1vmax 0 ",
                color: "black",
              }}
            >
              <p>{about.about.name}</p>
            </Typography>
            <Typography>{about.about.title}</Typography>
            <Typography style={{ margin: "1vmax 0" }}>
              {about.about.subtitle}
            </Typography>
          </div>

          <div>
            <Typography
              style={{
                wordSpacing: "5px",
                lineHeight: "40px",
                letterSpacing: "5px",
                textAlign: "center",
                wordWrap: "wrap",
              }}
            >
              {about.about.description}
            </Typography>
          </div>
        </div>
      </div>

    </>
  );
};

export default About;
