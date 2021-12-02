import React from "react";

const BrowserTheRoom = () => {
  return (
    <section id="browse-the-room" className="flex py-16 px-4 bg-gray-100">
      <div className="container mx-auto">
        {/* <!-- Subtitle --> */}
        <div className="flex flex-start mb-4">
          <h3 className="text-2xl capitalize font-semibold">
            browse the room <br className="" />
            that we designed for you
          </h3>
        </div>
        {/* <!-- Catalogs --> */}
        <div className="grid grid-cols-9 grid-rows-2 gap-4">
          {/* <!-- start: item browse the room - 1 --> */}
          <div
            className="relative col-span-9 row-span-1 md:col-span-4 card"
            style={{ height: 180 }}
          >
            <div className="card-shadow rounded-xl">
              <img
                className="
                  w-full
                  h-full
                  overlay
                  object-cover
                  overflow-hidden
                  rounded-xl
                "
                src="images/content/catalog-image-1.jpg"
                alt="Catalog 1 contains the furnitures for living room"
              />
            </div>
            <div
              className="
                overlay
                inset-0
                flex
                justify-center
                items-center
                flex-col
                pl-48
                md:pl-72 md:items-start
              "
            >
              <h5 className="text-lg font-semibold">Living Room</h5>
              <span className="">18,309 items</span>
            </div>
            <a href="./index.html" className="stretched-link">
              {/* <!-- Fake children --> */}
            </a>
          </div>
          {/* <!-- end: item browse the room - 1 --> */}

          {/* <!-- start: item browse room - 2 --> */}
          <div
            className="
              relative
              col-span-9
              row-span-1
              md:col-span-2 md:row-span-2
              card
            "
          >
            <div className="card-shadow rounded-xl">
              <img
                className="
                  overlay
                  h-full
                  w-full
                  object-cover
                  overflow-hidden
                  rounded-xl
                "
                src="images/content/catalog-image-3.jpg"
                alt="Catalog 2 contains the furnitures for decoration "
              />
            </div>
            <div
              className="
                overlay
                flex flex-col
                justify-center
                inset-0
                pt-0
                pl-48
                md:pt-12 md:pl-0 md:bottom-auto
                items-center
              "
            >
              <h5 className="font-semibold text-lg">Decoration</h5>
              <span className="">77.392 items</span>
            </div>
            <a href="index.html" className="stretched-link">
              {/* Fake Element */}
            </a>
          </div>
          {/* <!-- end: item browse room - 2  --> */}

          {/* <!-- start:item browse room - 3 --> */}
          <div
            className="
              relative
              col-span-9
              row-span-1
              md:col-span-3 md:row-span-2
              card
            "
          >
            <div className="card-shadow rounded-xl">
              <img
                className="
                  overlay
                  w-full
                  h-full
                  object-cover
                  overflow-hidden
                  rounded-xl
                "
                src="images/content/catalog-image-4.jpg"
                alt="Catalog 3 contains the furnitures for bedroom"
              />
            </div>
            <div
              className="
                overlay
                flex flex-col
                justify-center
                items-center
                inset-0
                pl-48
                md:pl-0
                pt-0
                md:pt-12 md:bottom-auto
              "
            >
              <h5 className="font-semibold text-lg">Bed Room</h5>
              <span className="">22,094 items</span>
            </div>
            <a href="index.html" className="stretched-link">
              {/* Fake Element */}
            </a>
          </div>
          {/* <!-- end:item browse room - 3 --> */}

          {/* <!-- start:item browse room - 4 --> */}
          <div
            className="relative col-span-9 row-span-1 md:col-span-4 card"
            style={{ height: 180 }}
          >
            <div className="card-shadow rounded-xl">
              <img
                className="
                  w-full
                  h-full
                  overlay
                  top-0
                  left-0
                  bottom-0
                  object-cover
                  rounded-xl
                "
                src="images/content/catalog-image-2.jpg"
                alt=""
              />
            </div>
            <div
              className="
                overlay
                inset-0
                flex flex-col
                justify-center
                items-center
                md:items-start
                pl-48
                md:pl-72
              "
            >
              <h5 className="font-semibold text-lg">Children Room</h5>
              <span className="">837 items</span>
            </div>
            <a href="index.html" className="stretched-link">
              {/* Fake Element */}
            </a>
          </div>
          {/* <!-- end: item browse room - 4 --> */}
        </div>
      </div>
    </section>
  );
};

export default BrowserTheRoom;
