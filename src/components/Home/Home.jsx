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
              src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces2">
            <img
              src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces3">
            <img
              src="https://colorlib.com/wp/wp-content/uploads/sites/2/creative-css3-tutorials.jpg"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces4">
            <img
              src="data:image/png;base64,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"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces5">
            <img
              src="https://miro.medium.com/v2/resize:fit:800/1*bc9pmTiyKR0WNPka2w3e0Q.png"
              alt="Face1"
            />
          </div>
          <div className="homeCubeSkillsFaces homeCubeSkillsFaces6">
            <img
              src="https://miro.medium.com/v2/resize:fit:512/1*doAg1_fMQKWFoub-6gwUiQ.png"
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
