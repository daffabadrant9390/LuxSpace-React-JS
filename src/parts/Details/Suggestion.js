import React from "react";

const Suggestion = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <div className="flex mb-4">
          <h3 className="text-2xl font-semibold capitalize">
            complete your room <br className="" />
            with what we designed
          </h3>
        </div>
        <div className="flex overflow-auto mb-4">
          {/* <!-- start: item suggestion 1 --> */}
          <div className="px-3 w-full md:w-3/12 card mb-4 md:mb-0">
            <div
              className="
                rounded-xl
                w-72
                md:w-auto
                p-4
                pb-8
                relative
                bg-white
                card-shadow
              "
            >
              <div className="rounded-xl bg-gray-100 overflow-hidden w-full h-72">
                <img
                  src="/images/content/suggestion1.png"
                  alt="Chair Suggestion One"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-lg font-semibold mt-4">
                Unbrax Office Chair 2XL
              </h5>
              <span className="">IDR 89.000.000</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- Fake Children --> */}
              </a>
            </div>
          </div>
          {/* <!-- end: item suggestion 1 --> */}

          {/* <!-- start: item suggestion 2 --> */}
          <div className="px-3 w-full md:w-3/12 card mb-4 md:mb-0">
            <div
              className="
                rounded-xl
                w-72
                md:w-auto
                p-4
                pb-8
                card-shadow
                relative
                bg-white
              "
            >
              <div className="rounded-xl bg-gray-100 overfow-hidden w-full h-72">
                <img
                  src="/images/content/suggestion2.png"
                  alt="Chair Suggestion Two"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h5 className="text-xl font-semibold mt-4">
                Wooden Chair Appendix
              </h5>
              <span className="">IDR 50.000.000</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- Fake Element --> */}
              </a>
            </div>
          </div>
          {/* <!-- end: item suggestion 2 --> */}

          {/* <!-- start: item suggestion 3 --> */}
          <div className="px-3 w-full md:w-3/12 card mb-4 md:mb-0">
            <div
              className="
                rounded-xl
                w-72
                md:w-auto
                p-4
                pb-8
                card-shadow
                relative
                bg-white
              "
            >
              <div className="rounded-xl w-full bg-gray-100 overflow-hidden h-72">
                <img
                  src="/images/content/suggestion3.png"
                  alt="Chair Suggestion Three"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-xl font-semibold mt-4">Glossy Chair 2.0</h5>
              <span className="">IDR 45.000.000</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- Fake Element --> */}
              </a>
            </div>
          </div>
          {/* <!-- end: item suggestion 3 --> */}

          {/* <!-- start: item suggestion 4 --> */}
          <div className="relative px-3 w-full md:w-3/12 card mb-4 md:mb-0">
            <div
              className="
                rounded-xl
                w-72
                md:w-auto
                p-4
                pb-8
                bg-white
                relative
                card-shadow
              "
            >
              <div className="rounded-xl w-full bg-gray-100 overflow-hidden h-72">
                <img
                  src="/images/content/suggestion4.png"
                  alt="Chair Suggestion Four"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <h5 className="text-xl font-semibold mt-4">
                Electricity Pyramids Chair
              </h5>
              <span className="">IDR 12.500.000</span>
              <a href="details.html" className="stretched-link">
                {/* <!-- Fake Element --> */}
              </a>
            </div>
          </div>
          {/* <!-- end: item suggestion 4 --> */}
        </div>
      </div>
    </section>
  );
};

export default Suggestion;
