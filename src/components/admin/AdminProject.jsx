import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdKeyboardBackspace, MdTimeline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProject, deleteProject, getUser } from "../../redux/action/user";
import { FaTrash } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const AdminProject = () => {
  const { user } = useSelector((state) => state.user);
  const { message, error, loading } = useSelector((state) => state.update);
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [image, setImage] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addProject(url, title, image, description, techStack));
  };
  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deleteProject(id));
  };
  const handleImages = (e) => {
    const Reader = new FileReader();
    Reader.readAsDataURL(e.target.files[0]);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        console.log(Reader.result);
        setImage(Reader.result);
      }
    };
  };
  useEffect(()=>{
    if(message){
      toast.success(message)
      dispatch(getUser())
    }
},[message])
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
            onChange={(e) => setDescription(e.target.value)}
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
        <div className="adminPanelTimeline">
          {user &&
            user.projects.map((item, index) => (
              <div className="admin-project-div">
                <img
                  style={{ width: "100%", maxHeight: "30vh" }}
                  src={item.image.url}
                  alt="logo"
                />
                <Typography variant="h6">{item.title}</Typography>
                <Typography
                  variant="body1"
                  style={{
                    letterSpacing: "2px",
                    width: "100%",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {item.date}
                </Typography>
                <Button
                  onClick={() => deleteHandler(item._id)}
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40, 0.7)",
                  }}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProject;
