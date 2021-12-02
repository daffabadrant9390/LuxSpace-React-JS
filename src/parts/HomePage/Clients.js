import React from "react";

const Clients = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-8 grid-rows-2 md:grid-rows-1 gap-4">
        <div
          className="
            col-span-4
            md:col-span-2
            row-span-1
            px-4
            my-4
            w-auto
            md:px-12 md:my-0
          "
        >
          <img
            src="images/content/logo-adobe.png"
            alt="Logo Client Adobe"
            className="mx-auto"
          />
        </div>
        <div className="col-span-4 md:col-span-2 row-span-1 px-4 my-4 md:px-12 md:my-0">
          <img
            src="images/content/logo-ikea.png"
            alt="Logo Client Ikea"
            className="mx-auto"
          />
        </div>
        <div
          className="
            col-span-4
            md:col-span-2
            row-span-1
            px-4
            my-4
            w-auto
            md:px-12 md:my-0
          "
        >
          <img
            src="images/content/logo-herman-miller.png"
            alt="Logo Client Herman Miller"
            className="mx-auto"
          />
        </div>
        <div
          className="
            col-span-4
            md:col-span-2
            row-span-1
            px-4
            my-4
            w-auto
            md:px-12 md:my-0
          "
        >
          <img
            src="images/content/logo-miele.png"
            alt="Logo Client Miele"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
