import ErrorPageMsg from "parts/ErrorPageMsg";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemmap from "parts/Sitemap";
import React from "react";

const Error404 = () => {
  return (
    <>
      <Header />
      <ErrorPageMsg
        title="Page Not Found"
        body="Sorry, but the page you were trying to view does not exist."
      />
      <Sitemmap />
      <Footer />
    </>
  );
};

export default Error404;
