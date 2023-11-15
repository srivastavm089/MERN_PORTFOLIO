import React, { useEffect } from "react";
import "./admin.css";
import { Alert, AlertTitle, Typography } from "@mui/material";
import { MdTimeline } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/base";
import { logout, updateUser } from "../../redux/action/user";
import toast, { Toaster } from "react-hot-toast";
const AdminPanel = () => {
  const { message, error } = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(name, email, password, skills, about));
  };

  const handleImages = (e, val) => {
    const Reader = new FileReader();
    Reader.readAsDataURL(e.target.files[0]);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        if (val == 1) {
          setSkills({ ...skills, image1: Reader.result });
        }
        if (val == 2) {
          setSkills({ ...skills, image2: Reader.result });
        }
        if (val == 3) {
          setSkills({ ...skills, image3: Reader.result });
        }
        if (val == 4) {
          setSkills({ ...skills, image4: Reader.result });
        }
        if (val == 5) {
          setSkills({ ...skills, image5: Reader.result });
        }
        if (val == 6) {
          setSkills({ ...skills, image6: Reader.result });
        }
      }
    };
  };
  const handleAboutImage = (e) => {
    const Reader = new FileReader();
    Reader.readAsDataURL(e.target.files[0]);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({ ...about, avatar: Reader.result });
      }
    };
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERROTS" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, []);

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="admin-panel">
      <Toaster />
      <div className="admin-panel-container">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginLeft: "1vmax" }}>N</p>
          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            className="adminPanelInput"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="adminPanelInput"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            className="adminPanelInput"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="adminPanelSkills">
            <Typography>SKILL 1</Typography>
            <input
              className="adminPanelInput fileUploadButton"
              type="file"
              onChange={(e) => handleImages(e, 1)}
              accept="image/*"
            />
          </div>
          <div className="adminPanelSkills ">
            <Typography>SKILL 2</Typography>
            <input
              className="adminPanelInput fileUploadButton"
              type="file"
              onChange={(e) => handleImages(e, 2)}
              accept="image/*"
            />
          </div>
          <div className="adminPanelSkills">
            <Typography>SKILL 3</Typography>
            <input
              className="adminPanelInput fileUploadButton"
              type="file"
              onChange={(e) => handleImages(e, 3)}
              accept="image/*"
            />
          </div>
          <div className="adminPanelSkills">
            <Typography>SKILL 4</Typography>
            <input
              className="adminPanelInput fileUploadButton"
              type="file"
              onChange={(e) => handleImages(e, 4)}
              accept="image/*"
            />
          </div>
          <div className="adminPanelSkills">
            <Typography>SKILL 5</Typography>
            <input
              className="adminPanelInput fileUploadButton"
              type="file"
              onChange={(e) => handleImages(e, 5)}
              accept="image/*"
            />
          </div>
          <div className="adminPanelSkills">
            <Typography>SKILL 6</Typography>
            <input
              className="adminPanelInput fileUploadButton"
              type="file"
              onChange={(e) => handleImages(e, 6)}
              accept="image/*"
            />
          </div>
          <div className="adminPanelAbout">
            <fieldset>
              <legend>About</legend>
              <input
                className="adminPanelInput"
                type="text"
                placeholder="name"
                value={about.name}
                onChange={(e) => setAbout({ ...about, name: e.target.value })}
              />
              <input
                className="adminPanelInput"
                type="text"
                placeholder="title"
                value={about.title}
                onChange={(e) => setAbout({ ...about, title: e.target.value })}
              />
              <input
                className="adminPanelInput"
                type="text"
                placeholder="subtitle"
                value={about.subtitle}
                onChange={(e) =>
                  setAbout({ ...about, subtitle: e.target.value })
                }
              />
              <input
                className="adminPanelInput"
                type="text"
                placeholder="description"
                value={about.description}
                onChange={(e) =>
                  setAbout({ ...about, description: e.target.value })
                }
              />
              <input
                className="adminPanelInput"
                type="text"
                placeholder="quote"
                value={about.quote}
                onChange={(e) => setAbout({ ...about, quote: e.target.value })}
              />
              <input
                className="adminPanelInput fileUploadButton"
                type="file"
                onChange={handleAboutImage}
                accept="image/*"
              />
            </fieldset>
          </div>
          <Link to="/admin/timeline">
            TIMELINE <MdTimeline />
          </Link>
          <Link to="/admin/project">
            PROJECTS <AiOutlineProject />
          </Link>
          <Button type="submit" variant="contained">
            Update
          </Button>
        </form>
        <Button
          className="logout-btn"
          variant="contained"
          color="error"
          style={{ display: "block", margin: "4vmax auto", cursor: "pointer" }}
          onClick={logoutHandler}
        >
          LOGOUT
        </Button>
      </div>
    </div>
  );
};
export default AdminPanel;
