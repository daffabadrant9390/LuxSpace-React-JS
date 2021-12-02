import React from "react";
import { Link } from "react-router-dom";

const Sitemmap = () => {
  return (
    <section className="sitemap">
      <div className="border-t border-b border-gray-200 py-12 mt-16 px-4">
        <div className="flex justify-center mb-14">
          <img
            className="w-40"
            src="/images/content/logo.png"
            alt="LuxSpace - is a web application that sell the best furnitures from all over the world"
          />
        </div>
        {/* <!-- start: footer menu --> */}
        <aside className="container mx-auto">
          <div className="flex flex-wrap md:space-x-4 justify-center">
            {/* <!-- start: footer-menu-1 --> */}
            <div className="w-full md:w-2/12 mb-4 md:mb-0 accordion">
              <h5 className="text-xl font-semibold mb-2 relative">Overview</h5>
              <ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
                <li>
                  <Link to="/" className="hover:underline py-1 inline-block">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline py-1 inline-block">
                    Refund
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline py-1 inline-block">
                    Promotion
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- end: footer-menu-1 --> */}

            {/* <!-- start: footer-menu-2 --> */}
            <div className="w-full md:w-2/12 mb-4 md:mb-0 accordion">
              <h5 className="text-xl font-semibold mb-2 relative">Company</h5>
              <ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
                <li>
                  <Link to="/" className="hover:underline py-1 inline-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline py-1 inline-block">
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline py-1 inline-block">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- end: footer-menu-2 --> */}

            {/* <!-- start: footer-menu-3 --> */}
            <div className="w-full md:w-2/12 mb-4 md:mb-0 accordion">
              <h5 className="text-xl font-semibold mb-2 relative">Explore</h5>
              <ul className="h-0 invisible md:h-auto md:visible overflow-hidden">
                <li>
                  <Link to="/" className="hover:underline py-1 inline-block">
                    Terms & Conds
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline py-1 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/" className="hover:underline py-1 inline-block">
                    For Developer
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- end: footer-menu-3 --> */}

            {/* <!-- start: footer-menu-4 --> */}
            <div className="w-full md:w-3/12 mb-4 md:mb-0">
              <h5 className="text-xl font-semibold mb-2 relative">
                Special Letter
              </h5>
              <form action="#">
                <label className="w-full relative">
                  <input
                    type="text"
                    className="
                      w-full
                      bg-gray-100
                      rounded-xl
                      px-5
                      py-3
                      focus:outline-none
                    "
                    placeholder="Your email address"
                  />
                  <button
                    className="
                      absolute
                      right-0
                      p-3
                      text-white
                      bg-pink-400
                      rounded-xl
                    "
                  >
                    <svg
                      className="fill-current"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.6177 0.411971C23.6163 0.410624 23.6152 0.409187 23.6138 0.407839C23.6124 0.406492 23.6109 0.405414 23.6095 0.404157C23.236 0.049307 22.7002 -0.0573008 22.2098 0.126411L0.833871 8.13353C0.268743 8.34518 -0.0623361 8.87521 0.0098048 9.4523C0.0821332 10.0294 0.53462 10.4694 1.13589 10.547L11.5833 11.8968C11.6028 11.8994 11.6185 11.9143 11.6212 11.9332L13.0301 21.9417C13.1112 22.5177 13.5704 22.9512 14.1729 23.0204C14.2279 23.0268 14.2824 23.0298 14.3364 23.0298C14.8735 23.0298 15.3486 22.7229 15.5495 22.231L23.9077 1.75274C24.0994 1.28302 23.9882 0.76983 23.6177 0.411971ZM1.30534 9.34475C1.2819 9.34169 1.27136 9.34039 1.26728 9.30788C1.26325 9.27537 1.27319 9.27159 1.29508 9.26347L21.2946 1.77187L11.9404 10.7333C11.8794 10.7163 1.30534 9.34475 1.30534 9.34475ZM14.37 21.7892C14.3614 21.8102 14.358 21.8198 14.3236 21.8158C14.2897 21.8119 14.2883 21.8017 14.2852 21.7794C14.2852 21.7794 12.8535 11.6495 12.8358 11.5911L22.19 2.62972L14.37 21.7892Z" />
                    </svg>
                  </button>
                </label>
              </form>
            </div>
            {/* <!-- end: footer-menu-4 --> */}
          </div>
        </aside>
        {/* <!-- end: footer menu --> */}
      </div>
    </section>
  );
};

export default Sitemmap;
