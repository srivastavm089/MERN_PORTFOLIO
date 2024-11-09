import React, { useEffect, useState } from "react";
import "./home.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { moonImage } from "../../images";
import { venusImage } from "../../images";
import { spaceImage } from "../../images";
import { Typography } from "@mui/material";
import Timeline from "../Timelines/TimeLine";
import { Link } from "react-router-dom";
import { Audio } from "react-loader-spinner";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiGithub,
} from "react-icons/si";
import { MouseOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
const Home = ({ data }) => {
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonImage);
    const venusTexture = textureLoader.load(venusImage);
    const spaceTexture = textureLoader.load(spaceImage);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const canvas = document.querySelector(".home-canvas");
    const renderer = new THREE.WebGL1Renderer({ canvas });
    const moonGeometry = new THREE.SphereGeometry(3, 64, 64);
    const venusGeometry = new THREE.SphereGeometry(4, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });

    const venusMaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
    const pointLight = new THREE.PointLight(0xffffff, 50);
    pointLight.position.z = 10;
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    const venus = new THREE.Mesh(venusGeometry, venusMaterial);
    const control = new OrbitControls(camera, renderer.domElement);
    const lightHelper = new THREE.PointLightHelper(pointLight);
    venus.position.set(8, 5, 5);
    pointLight.position.set(8, 5, 5);
    scene.add(moon);
    scene.add(venus);
    scene.add(pointLight);
    scene.add(lightHelper);
    scene.background = spaceTexture;

    camera.position.z = 10;
    window.addEventListener("mousemove", (e) => {
      if (e.clientX < window.innerWidth / 2) {
        moon.rotation.x -= 0.01;
        moon.rotation.y += 0.0;
        venus.rotation.x -= 0.01;
        venus.rotation.y += 0.01;
      }
      if (e.clientX > window.innerWidth / 2) {
        moon.rotation.x -= 0.01;
        moon.rotation.y -= 0.0;
        venus.rotation.x -= 0.01;
        venus.rotation.y -= 0.01;
      }
      if (e.clientY > window.innerWidth / 2) {
        moon.rotation.x -= 0.01;
        moon.rotation.y += 0.0;
        venus.rotation.x -= 0.01;
        venus.rotation.y += 0.01;
      }
      if (e.clientY <= window.innerHeight / 2) {
        moon.rotation.x -= 0.01;
        moon.rotation.y -= 0.01;
        venus.rotation.x -= 0.01;
        venus.rotation.y -= 0.01;
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.01;
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    animate();

    const handleScroll = () => {
      camera.rotation.z = window.scrollY * 0.001;
      camera.rotation.y = window.scrollY * 0.003;
      const skillsBox = document.getElementById("homeSkillBox");
      if (window.scrollY > 1200) {
        if (skillsBox != null) {
          skillsBox.style.animationName = "homeskillsBoxAnimationOn";
        }
      } else {
        if (skillsBox != null) {
          skillsBox.style.animationName = "homeskillsBoxAnimationOff";
        }
      }
    };
    return window.addEventListener("scroll", handleScroll);
  }, []);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  return (
    <div className="home">
      <canvas className="home-canvas"></canvas>
      <div className="homeCanvasContainer">
        <Typography variant="h1">
          <p className="name-animation">A</p>
          <p className="name-animation">B</p>
          <p className="name-animation">H</p>
          <p className="name-animation">A</p>
          <p className="name-animation">Y</p>
        </Typography>
        <div className="homeCanvasBox">
          <Typography variant="h2">WEB DESIGNER</Typography>
          <Typography variant="h2">DEVELOPER</Typography>
          <Typography variant="h2">FREELANCER</Typography>
          <Typography variant="h2">CONTENT CREATOR</Typography>
        </div>

        <Link to="/project">VIEW WORK</Link>
      </div>
      <div className="homeScrollBtn">
        <MouseOutlined />
      </div>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        {data.user && <Timeline timeline={data.user.timeline} />}
      </div>
      {data.user ? (
        <div className="homeSkills">
          <Typography variant="h3">SKILLS</Typography>
          <div className="homeCubeSkills">
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces1">
              <img src={data.user.skills.image1.url} alt="Face1" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces2">
              <img src={data.user.skills.image2.url} alt="Face1" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces3">
              <img src={data.user.skills.image3.url} alt="Face1" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces4">
              <img src={data.user.skills.image4.url} alt="Face1" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces5">
              <img src={data.user.skills.image5.url} alt="Face1" />
            </div>
            <div className="homeCubeSkillsFaces homeCubeSkillsFaces6">
              <img sr src={data.user.skills.image6.url} alt="Face1" />
            </div>
          </div>
          <div className="cubeShadow"></div>
          <div className="homeSkillsBox" id="homeSkillBox">
            <SiReact />
            <SiJavascript />
            <SiMongodb />

            <SiNodedotjs />
            <SiExpress />
            <SiCss3 />
            <SiHtml5 />
            <SiGithub />
          </div>
        </div>
      ) : (
        <Audio
          height="250"
          width="2000"
          radius="9"
          color="purple"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
      )}
    </div>
  );
};

export default Home;
