import React from "react";
import "../styles/App.scss";
import Intro from "../components/organisms/intro";
import Infrastructure from "../components/organisms/infrastructure";
import Metal from "../components/organisms/metal";
import Navbar from "../components/molecules/navbar";
import Experienced from "../components/organisms/experienced";
import Footer from "../components/molecules/footer";

function index() {
  return (
    <div>
      <Navbar />
      <Intro />
      {/* <Metal />
      <Infrastructure />
      <Experienced />
      <Footer /> */}
    </div>
  );
}

export default index;
