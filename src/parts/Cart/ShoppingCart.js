import React from "react";

const ShoppingCart = () => {
  return (
    <div className="w-full md:w-8/12 px-4 md:mb-0" id="shopping-cart">
      {/* <!-- start: title --> */}
      <div
        className="
                flex flex-start
                items-center
                mb-4
                mt-8
                pb-3
                border-b border-gray-200
                md:border-b-0
              "
      >
        <h3 className="text-xl md:text-2xl">Shopping Cart</h3>
      </div>
      {/* <!-- end: title --> */}

      {/* <!-- start: table title --> */}
      <div className="border-b border-gray-200 pb-2 mb-4 hidden md:block">
        <div className="flex flex-start items-center -mx-4">
          <div className="px-4 flex-none">
            <div className="" style={{ width: 90 }}>
              <h6>Photo</h6>
            </div>
          </div>
          <div className="px-4 w-5/12">
            <div className="">Product</div>
          </div>
          <div className="px-4 w-5/12">
            <div className="">Price</div>
          </div>
          <div className="px-4 w-2/12">
            <div className="">Action</div>
          </div>
        </div>
      </div>
      {/* <!-- end: table title --> */}

      {/* <!-- start: cart empty --> */}
      <div className="text-center my-12 hidden" id="cart-empty">
        <p className="text-lg">
          Oooppss... Your Cart is Empty.
          <a href="cart.html" className="text-blue-600 underline">
            Shop Now!
          </a>
        </p>
      </div>
      {/* <!-- end: cart empty --> */}

      {/* <!-- start: table row 1 --> */}
      <div
        className="flex flex-start flex-wrap items-center -mx-4 mb-4"
        data-row="1"
      >
        <div className="px-4 flex-none">
          <div className="" style={{ width: 90, height: 90 }}>
            <img
              src="/images/content/chair1.jpg"
              alt="Chair Cart One"
              className="
                      w-full
                      h-full
                      object-center object-cover
                      rounded-xl
                      overflow-hidden
                    "
            />
          </div>
        </div>
        <div className="px-4 w-auto md:w-5/12 flex-1">
          <div className="leading-8">
            <h6 className="text-lg md:text-xl font-semibold">Saman Kakka</h6>
            <span className="text-sm md:text-lg">Office Room</span>
            <h6 className="font-semibold text-base md:text-lg block md:hidden">
              IDR 48.000.000
            </h6>
          </div>
        </div>
        <div
          className="
                  px-4
                  w-auto
                  md:w-5/12
                  flex-none
                  md:flex-1
                  hidden
                  md:block
                "
        >
          <div className="">
            <h6 className="font-semibold text-lg">IDR 48.000.000</h6>
          </div>
        </div>
        <div className="px-4 w-2/12">
          <div className="text-center">
            <button
              className="px-3 py-1 text-red-600 focus:outline-none"
              data-delete-item="1"
            >
              X
            </button>
          </div>
        </div>
      </div>
      {/* <!-- end: table row 1 --> */}

      {/* <!-- start: table row 2 --> */}
      <div className="flex flex-start items-center mb-4 -mx-4" data-row="2">
        {/* <!-- start: image --> */}
        <div className="px-4 flex-none">
          <div className="" style={{ width: 90, height: 90 }}>
            <img
              src="/images/content/suggestion2.png"
              alt="Chair Cart Two"
              className="
                      w-full
                      h-full
                      object-center object-cover
                      rounded-xl
                      overflow-hidden
                    "
            />
          </div>
        </div>
        {/* <!-- end: image --> */}

        {/* <!-- start: product --> */}
        <div className="px-4 w-auto md:w-5/12 flex-1">
          <div className="leading-8">
            <h6 className="font-semibold text-lg md:text-xl">Green Seat</h6>
            <span className="text-base md:text-lg">Office Room</span>
            <h6 className="font-semibold text-base md:text-lg block md:hidden">
              IDR 12.500.000
            </h6>
          </div>
        </div>
        {/* <!-- end: product --> */}

        {/* <!-- start: price --> */}
        <div
          className="
                  px-4
                  w-auto
                  md:w-5/12
                  flex-none
                  md:flex-1
                  hidden
                  md:block
                "
        >
          <h6 className="font-semibold text-base md:text-lg">IDR 12.500.000</h6>
        </div>
        {/* <!-- end: price --> */}

        {/* <!-- start: button action --> */}
        <div className="px-4 w-2/12">
          <div className="text-center">
            <button
              className="px-3 py-1 text-red-600 focus:outline-none"
              data-delete-item="2"
            >
              X
            </button>
          </div>
        </div>
        {/* <!-- end: button action --> */}
      </div>
      {/* <!-- end: table row 2 --> */}

      {/* <!-- start: table row 3 --> */}
      <div className="flex flex-start items-center mb-4 -mx-4" data-row="3">
        {/* <!-- start: image --> */}
        <div className="px-4 flex-none">
          <div className="" style={{ width: 90, height: 90 }}>
            <img
              src="/images/content/suggestion3.png"
              alt="Chair Cart Three"
              className="
                      w-full
                      h-full
                      object-cover object-center
                      rounded-xl
                      overflow-hidden
                    "
            />
          </div>
        </div>
        {/* <!-- end: image --> */}

        {/* <!-- start: product --> */}
        <div className="px-4 flex-1 w-auto md:w-5/12">
          <div className="leading-8">
            <h6 className="font-semibold text-lg md:text-xl">Pacific</h6>
            <span className="text-base md:text-lg">Office Room</span>
            <h6 className="font-semibold text-base md:text-lg block md:hidden">
              IDR 88.800.000
            </h6>
          </div>
        </div>
        {/* <!-- end: product --> */}

        {/* <!-- start: price --> */}
        <div className="px-4 flex-none md:flex-1 w-auto md:5/12 hidden md:block">
          <h6 className="font-semibold text-base md:text-lg">IDR 88.800.000</h6>
        </div>
        {/* <!-- end: price --> */}

        {/* <!-- start: action button --> */}
        <div className="px-4 w-2/12">
          <div className="text-center">
            <button
              className="text-red-600 py-1 px-3 focus:outline-none"
              data-delete-item="3"
            >
              X
            </button>
          </div>
        </div>
        {/* <!-- end: action button --> */}
      </div>
      {/* <!-- end: table row 3 --> */}
    </div>
  );
};

export default ShoppingCart;
