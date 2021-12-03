import React from "react";

import Header from "parts/Header";
import Hero from "parts/HomePage/Hero";
import JustArrived from "parts/HomePage/JustArrived";
import BrowserTheRoom from "parts/HomePage/BrowseTheRoom";
import Clients from "parts/HomePage/Clients";
import Sitemmap from "parts/Sitemap";
import Footer from "parts/Footer";

import useSmoothScrollAnchor from "helpers/hooks/useSmoothScrollAnchor";
import useModal from "helpers/hooks/useModal";

const HomePage = () => {
  useSmoothScrollAnchor();
  useModal();

  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowserTheRoom />
      <JustArrived />
      <Clients />
      <Sitemmap />
      <Footer />
    </>
  );
};

export default HomePage;
