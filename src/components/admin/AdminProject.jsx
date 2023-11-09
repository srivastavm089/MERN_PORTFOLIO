import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { MdKeyboardBackspace, MdTimeline } from "react-icons/md";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProject } from "../../redux/action/user";

const AdminProject = () => {
  const dispatch = useDispatch()
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [image,setImage] = useState("")
  const submitHandler = (e) => {
          e.preventDefault();
       dispatch(addProject(url,title, image, description, techStack))
  };
  const handleImages = (e) => {
   
    const Reader = new FileReader();
    Reader.readAsDataURL(e.target.files[0]);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
           console.log(Reader.result)
           setImage(Reader.result)
      }
    };
  };
  return (
    <div className="admin-panel">
      {/* <Toaster /> */}
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
            type="url"
            className="adminPanelInput"
            placeholder="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <input
            type="text"
            className="adminPanelInput"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="adminPanelInput"
            placeholder="description"
            value={description}
            onChange={e=> setDescription(e.target.value)}

          />
          <input
            type="text"
            className="adminPanelInput"
            placeholder="techStack"
            onChange={(e) => setTechStack(e.target.value)}
          />

          <input
            className="adminPanelInput fileUploadButton"
            type="file"
            onChange={handleImages}
            placeholder="image"
            accept="image/*"
          />

          <Button type="submit">ADD</Button>

          <Link to="/account">
            BACK
            <MdKeyboardBackspace />
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AdminProject;
