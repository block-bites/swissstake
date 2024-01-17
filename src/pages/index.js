import React from "react";
import { Helmet } from "react-helmet";
import "../styles/App.scss";

import Intro from "../components/organisms/intro";
import Infrastructure from "../components/organisms/infrastructure";
import Navbar from "../components/organisms/navbar";
import Experienced from "../components/organisms/experienced";
import Footer from "../components/organisms/footer";

import favicon from "../../static/favicon.svg";

function Index() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SwissStake</title>
        <link rel="icon" href={favicon} type="image/svg+xml" />
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
          rel="stylesheet" 
        />
      </Helmet>
      <Navbar />
      <Intro />
      <Infrastructure />
      <Experienced />
      <Footer />
    </>
  );
}

export default Index;
