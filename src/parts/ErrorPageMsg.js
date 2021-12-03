import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ErrorPageMsg = ({ title, body }) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center min-h-screen">
          <div className="w-full md:w-4/12 text-center ">
            <h2 className="text-xl md:text-3xl font-semibold mb-6">{title}</h2>
            <p className="text-base md:text-lg mb-12">{body}</p>
            <Link
              to="/"
              className="
                px-8
                py-3
                rounded-xl
                bg-pink-400
                text-black
                focus:bg-black focus:text-pink-400 focus:outline-none
                transition-all
                duration-200
              "
            >
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

ErrorPageMsg.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
};

export default ErrorPageMsg;
