import React from "react";
import { Helmet } from "react-helmet";
import "../styles/App.scss";
import Intro from "../components/organisms/intro";
import Infrastructure from "../components/organisms/infrastructure";
import Animation from "../components/organisms/animation";
import Navbar from "../components/organisms/navbar";
import Experienced from "../components/organisms/experienced";
import Footer from "../components/molecules/footer";
import favicon from "../assets/favicon.png";

function Index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SwissStake</title>
        <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
      </Helmet>
      <Navbar />
      <Intro />
      <Animation />
      <Infrastructure />
      <Experienced />
      <Footer />
    </>
  );
}

export default Index;
