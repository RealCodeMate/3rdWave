import React from "react";
import Header from "../../compenents/Header/Header";
import "../../sass/pages/_about.scss";
import image from "../../assets/aboutMe.jpeg"
import Footer from "../../compenents/Footer/Footer";

export default function About() {
  return (
    <div id="parent">
      <Header />
      <div className="about">
        <div className="left-about">
          <h1>So who am I ? </h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          <a href="#">Contact me</a>
        </div>
        <div className="right-about">
          <img src={image} alt="img" className="aboutmeImage" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
