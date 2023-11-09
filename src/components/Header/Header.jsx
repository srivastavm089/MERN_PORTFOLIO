import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { FaUserAlt } from "react-icons/fa";
const Header = () => {
  return (
    <ReactNavbar
      navColor1="white"
      navColor2="hsl(219,48%, 8%)"
      burgerColor="hsl(250, 100%, 75%)"
      nav2justifyContent="space-around"
      nav3justifyContent="space-around"
      link1Text="Home"
      logo="https://m.media-amazon.com/images/I/61ngB2HqwJL._AC_UY350_.jpg"
      link2Text="About"
      link3Text="Projects"
      link4Text="Contact"
      link1Url="/"
      link2Url="/about"
      link3Url="/project"
      link4Url="/contact"
      link1ColorHover="white"
      link1Color="HSL(250, 100%,75%)"
      link1Size="1.5rem"
      link1Padding="3vmax"
      profileIcon={true}
      profileIconUrl="/account"
      ProfileIconElement={FaUserAlt}
      ProfileUrl="/account"
      profileIconColor="HSL(250, 100% ,75%)"
      profileIconColorHover="white"
    />
  );
};

export default Header;
