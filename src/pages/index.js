import React from "react";
import "../styles/App.scss";
import Intro from "../components/organisms/intro";
import Infrastructure from "../components/organisms/infrastructure";
import Metal from "../components/organisms/metal";
import Navbar from "../components/molecules/navbar";
import Experienced from "../components/organisms/experienced";

function index() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Metal />
      <Infrastructure />
      <Experienced />
    </div>
  );
}

export default index;
