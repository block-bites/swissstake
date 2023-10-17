import React from "react";
import "../styles/App.scss";
import Intro from "../components/organisms/intro";
import Infrastructure from "../components/organisms/infrastructure";
import Animation from "../components/organisms/animation";
import Navbar from "../components/molecules/navbar";
import Experienced from "../components/organisms/experienced";
import Footer from "../components/molecules/footer";

function index() {
  return (
    <>
      <Navbar />
      <Intro />
      {/* <Animation />
      <Infrastructure />
      <Experienced />
      <Footer /> */}
    </>
  );
}

export default index;
