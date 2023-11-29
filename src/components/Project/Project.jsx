import React from "react";
import "../Project/project.css";
import { AiOutlineProject } from "react-icons/ai";
import { Typography } from "@mui/material";
import { Button } from "@mui/base";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProject, getUser } from "../../redux/action/user";
const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  id,
}) => {
  const dispatch = useDispatch();
  const isAdmin = localStorage.getItem("token");
  const deleteHandler = (id) => {
    dispatch(deleteProject(id));
  };

  return (
    <>
      <a href={url} className="projectCard" target="_blank">
        <div>
          <img src={projectImage} alt="Project" className="projectImage" />
          <Typography variant="h5" className="projectTitle">
            {projectTitle}
          </Typography>
        </div>
        <div>
          <Typography variant="h4">About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack : {technologies}</Typography>
        </div>
      </a>
      {isAdmin && (
        <Button
          type="submit"
           className="admin-delete-btn"
          onClick={() => deleteHandler(id)}
        >
          <Delete />
        </Button>
      )}
    </>
  );
};
const Project = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.user);
  console.log(projects.user);
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  console.log(projects.user);
  return (
    <div className="project">
      <Typography variant="h3">
        Project <AiOutlineProject />
      </Typography>
      <div className="projectWrapper">
        {projects.user &&
          projects.user.projects.map((item, index) => (
            <ProjectCard
              key={index}
              url={item.url}
              projectImage={item.image.url}
              projectTitle={item.title}
              description={item.description}
              technologies={item.techStack}
              id={item._id}
            />
          ))}
      </div>
      <Typography variant="h3">
        All The Project Above Are Made By Me{" "}
        <FaRegSmileWink style={{ paddingLeft: "1vh" }} />
      </Typography>
    </div>
  );
};

export default Project;
