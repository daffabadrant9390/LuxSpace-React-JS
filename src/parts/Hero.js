import React from "react";

const Hero = () => {
  return (
    <section className="flex items-center hero">
      {/* <!-- START: Section Hero | Left Side --> */}
      <div
        className="
          w-full
          absolute
          inset-0
          z-20
          flex flex-col
          justify-center
          text-center
          hero-caption
          md:relative md:w-1/2
        "
      >
        <h1 className="text-3xl leading-tight md:text-5xl font-semibold">
          The Room <br className="" />
          You've Dreaming
        </h1>
        <h2 className="px-8 my-6 text-base tracking-wide md:text-lg md:px-0">
          Kami menyediakan furniture berkelas yang
          <br className="hidden lg:block" />
          membuat ruangan terasa homey
        </h2>
        <div>
          <a
            href="#browse-the-room"
            className="
              px-8
              py-3
              mt-4
              inline-block
              bg-pink-400
              text-black
              flex-none
              rounded-full
              hover:bg-black hover:text-pink-400
              transition
              duration-200
            "
          >
            Explore Now
          </a>
        </div>
      </div>
      {/* <!-- END: Section Hero | Left Side --> */}

      {/* <!-- START: Right Side Hero --> */}
      <div className="w-full inset-0 md:relative md:w-1/2">
        <div className="relative hero-image">
          <div className="overlay inset-0 bg-black opacity-30 z-10"></div>
          <div className="overlay right-0 bottom-0 md:inset-0">
            <button
              className="video hero-cta focus:outline-none z-30 modal-trigger"
              data-content='<div className="w-screen relative z-50 pb-56 md:w-88">
              <div className="absolute w-full h-full">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/UudV1VdFtuQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>'
            ></button>
          </div>
          <img
            className="
              w-full
              h-full
              inset-0
              absolute
              md:relative
              object-cover object-center
            "
            src="images/content/hero-image.png"
            alt="House with Sofa and some plants"
          />
        </div>
      </div>
      {/* <!-- END: Right Side Hero --> */}
    </section>
  );
};

export default Hero;
