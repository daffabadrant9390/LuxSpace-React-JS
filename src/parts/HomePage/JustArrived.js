import React from "react";

const JustArrived = () => {
  return (
    <section className="flex flex-col py-16">
      {/* <!-- start: subtitle --> */}
      <div className="container mx-auto mb-14">
        <div className="flex justify-center text-center mb-4">
          <h3 className="font-semibold text-2xl">
            Just Arrived <br className="" />
            This Summer For You
          </h3>
        </div>
      </div>
      {/* <!-- end: subtitle --> */}

      {/* <!-- start: carousel-wrapper --> */}
      <div className="overflow-x-hidden px-4" id="carousel">
        <div className="container mx-auto"></div>
        <div className="relative flex flex-row -mx-4">
          {/* <!-- start: carousel-card-1 --> */}
          <div className="relative px-4 card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ height: 386, width: 287 }}
            >
              <img
                src="images/content/img-carousel-1.jpg"
                alt="Kursi Furniture Bagus"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Cangkir Mauttie</h5>
            <span className="">IDR 89.300.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- Fake Anchor Element --> */}
            </a>
          </div>
          {/* <!-- end: carousel-card-1 --> */}
          {/* <!-- start: carousel-card-2 --> */}
          <div className="relative px-4 card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ height: 386, width: 287 }}
            >
              <img
                src="images/content/img-carousel-2.jpg"
                alt="Kursi Furniture Bagus"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Bankyu Minimax</h5>
            <span className="">IDR 67.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- Fake Anchor Element --> */}
            </a>
          </div>
          {/* <!-- end: carousel-card-2 --> */}
          {/* <!-- start: carousel-card-3 --> */}
          <div className="relative px-4 card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ height: 386, width: 287 }}
            >
              <img
                src="images/content/img-carousel-3.jpg"
                alt="Kursi Furniture Bagus"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Buku Sidu Edition</h5>
            <span className="">IDR 12.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- Fake Anchor Element --> */}
            </a>
          </div>
          {/* <!-- end: carousel-card-3 --> */}
          {/* <!-- start: carousel-card-4 --> */}
          <div className="relative px-4 card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ height: 386, width: 287 }}
            >
              <img
                src="images/content/img-carousel-4.jpg"
                alt="Kursi Furniture Bagus"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Watch Notes X</h5>
            <span className="">IDR 73.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- Fake Anchor Element --> */}
            </a>
          </div>
          {/* <!-- end: carousel-card-4 --> */}
          {/* <!-- start: carousel-card-5 --> */}
          <div className="relative px-4 card">
            <div
              className="rounded-xl overflow-hidden card-shadow"
              style={{ height: 386, width: 287 }}
            >
              <img
                src="images/content/img-carousel-5.jpg"
                alt="Kursi Furniture Bagus"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h5 className="text-lg font-semibold mt-4">Watch Notes X</h5>
            <span className="">IDR 73.000.000</span>
            <a href="details.html" className="stretched-link">
              {/* <!-- Fake Anchor Element --> */}
            </a>
          </div>
          {/* <!-- end: carousel-card-5 --> */}
        </div>
      </div>
      {/* <!-- end: carousel-wrapper --> */}
    </section>
  );
};

export default JustArrived;
