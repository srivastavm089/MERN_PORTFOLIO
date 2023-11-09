import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtimeline, deleteTimeline } from "../../redux/action/user";
import { MdKeyboardBackspace } from "react-icons/md";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getUser } from "../../redux/action/user";
import { FaTrash } from "react-icons/fa";
const Timeline = () => {
  const dispatch = useDispatch();
  const { message, error, loading } = useSelector((state) => state.update);
  const { user } = useSelector((state) => state.user);

  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addtimeline(title, description, date));
    dispatch(getUser());
    
  };
  const deleteHandler = (id) => {
    dispatch(deleteTimeline(id));
    dispatch(getUser())
  };


  return (
    <div className="admin-panel">
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
            placeholder="Title"
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
            type="date"
            className="adminPanelInput"
            placeholder="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <Link to="/account">
            BACK <MdKeyboardBackspace />
          </Link>

          <Button type="submit" variant="contained">
            Add
            
          </Button>
        </form>
        <div className="adminPanelTimeline">
          {
            user.timeline && user.timeline.map((item, index) =>(
              <div>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                {item.description}
              </Typography>
              <Typography variant="body1" style={{ fontWeight: 600 }}>
                {item.date}
              </Typography>
              <Button
                onClick={() => deleteHandler(index)}
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

export default Timeline;
