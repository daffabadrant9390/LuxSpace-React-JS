import Breadcrumb from "components/Breadcrumb";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemmap from "parts/Sitemap";
import SuccessMsg from "parts/SuccessMsg";
import React from "react";

const Success = () => {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/success-checkout", name: "Success Checkout" },
        ]}
      />
      <SuccessMsg />
      <Sitemmap />
      <Footer />
    </>
  );
};

export default Success;
