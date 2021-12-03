import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb";
import Sitemmap from "parts/Sitemap";
import Footer from "parts/Footer";
import ShoppingCart from "parts/Cart/ShoppingCart";
import ShippingDetails from "./ShippingDetails";

const Cart = () => {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemmap />
      <Footer />
    </>
  );
};

export default Cart;
