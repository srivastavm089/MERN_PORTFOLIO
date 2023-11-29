import React, { useEffect } from "react";
import "../About/about.css";
import { Typography } from "@mui/material";
import { image } from "../../images";
import Typewriter from "typewriter-effect";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/action/user";
const About = () => {
  const dispatch = useDispatch()
  const about = useSelector((state)=> state.user.user);

  useEffect(()=>{
    dispatch(getUser());

  }, [dispatch])

  return (
    <>
      {
        about && <div className="about">
        <div className="aboutContainer">
          <Typography>{about.about.quote}</Typography>
        </div>
        <div className="aboutContainer2">
          <div>
            <div className="image-container">
              <img
                src={about.about.avatar.url}
                alt="image"
                className="about-avatar"
              />
              <div className="border"></div>
            </div>

            <Typography
              variant="h4"
              style={{
                margin: "1vmax 0 ",
                color: "black",
              }}
            >
              <p>Hi, i'm {about.about.name}</p>
            </Typography>
            <Typography>
              {about.about.title} !
             
            </Typography>
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
          
              <Typewriter
                options={{
                  strings: ["Welcome You.....", `${about.about.description}....`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Typography>
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default About;
