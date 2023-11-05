import React from "react";
import '../Project/project.css'
import {AiOutlineProject} from 'react-icons/ai'
import { Typography } from "@mui/material";
import { Button } from "@mui/base";
import { Delete } from "@mui/icons-material";
import {FaRegSmileWink} from 'react-icons/fa'

const ProjectCard =({url, projectImage, projectTitle, description, technologies, isAdmin=false})=>{
        return(
          <>
          <a href={url} className="projectCard" target="_blank">
            <div>
              <img src={projectImage} alt="Project" className="projectImage" />
              <Typography variant="h5" className="projectTitle">{projectTitle}</Typography>
            </div>
            <div>
            <Typography variant="h4" >About Project</Typography>
            <Typography >{description}</Typography>
            <Typography variant="h6" >Tech Stack : {" "}{technologies}</Typography>
            </div>

          </a>
          {
            isAdmin && (
              <Button style={{color:"rgba(40,40,40,0.7)"}}>
                <Delete/>
              </Button>
            )
          }
          </>
        )
}
const Project = () => {
  const projects=[1,2,3,4];
  return(
    <div className="project">
       <Typography variant="h3">Project <AiOutlineProject/></Typography>
       <div className="projectWrapper">
        {
          projects.map((item,index)=>(
            <ProjectCard
            url="https://www.google.com/"
             projectImage="https://m.media-amazon.com/images/I/61ngB2HqwJL._AC_UY350_.jpg"
              projectTitle="e-commerce"
               description="e commerce website"
                technologies="REACT, JAVASCRIPT"
            
            />
          ))
        }
       </div>
       <Typography variant="h3" style={{font:'100 1.2rem "Ubuntu Mono"'}}>
        All The Project Above Are Made By Me {" "}  <FaRegSmileWink style={{paddingLeft:'1vh'}}/>

       </Typography>
    </div>
  )
};

export default Project;
