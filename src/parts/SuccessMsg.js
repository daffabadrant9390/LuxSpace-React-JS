import React from "react";
import { Link } from "react-router-dom";

const SuccessMsg = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center min-h-screen">
          <div className="w-full md:w-4/12 text-center">
            <img
              src="/images/content/illustration-success.png"
              alt="Illustration For Success Checkout"
            />
            <h2 className="text-xl md:text-3xl font-semibold mb-6">
              Ah yes it's success!
            </h2>
            <p className="text-base md:text-lg mb-12">
              Furniture yang anda beli akan kami kirimkan saat ini juga so now
              please sit tight and be ready for it
            </p>
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
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMsg;
