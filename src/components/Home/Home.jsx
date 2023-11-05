import React, { useEffect } from "react";
import "./home.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { moonImage } from "../../images";
import { venusImage } from "../../images";
import { spaceImage } from "../../images";
import { Typography } from "@mui/material";
import Timeline from "../Timelines/TimeLine";
import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiGithub
} from "react-icons/si";
const Home = () => {
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
        moon.rotation.y -= 0.0;
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
  }, []);
  return (
    <div className="home">
      <canvas className="home-canvas"></canvas>
      <div className="homeContainer">
        <Typography variant="h3">TIMELINE</Typography>
        <Timeline timlines={[1, 2, 3, 4]} />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">SKILLS</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces1">
            <img
              src="https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmOaU4O1BwCS7uJkU0MllAM9wO1DY4CZ_smaP3GtcOp5rkzKesjjtvdeMBVxZYuxu39Y&usqp=CAU"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces3">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrerqjNRgnnZIlWo2Wd9BiAQ8syKYDTDoEQqE54bQlyvmc_n6IzrQF0Rjp4hr4JXL7x0&usqp=CAU"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwg5j3xKBo6-45QzWw44xfl8ONW8m7edScMaG1ZwX78NZCL80yeP2D&usqp=CAE&s"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwg5j3xKBo6-45QzWw44xfl8ONW8m7edScMaG1ZwX78NZCL80yeP2D&usqp=CAE&s"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSus8o_0kIokvN88WyR4CxsYTRYh6eegGlccKehe7mWQh7JEnA9lZWA&s=0"
              alt="Face1"
            />
          </div>
        </div>
        <div className="cubeShadow"></div>
        <div className="homeSkillsBox">
          <SiReact />
          <SiJavascript />
          <SiMongodb />

          <SiNodedotjs />
          <SiExpress />
          <SiCss3 />
          <SiHtml5 />
          <SiGithub/>
        </div>
      </div>
    </div>
  );
};

export default Home;
