import React from "react";

const ShippingDetails = () => {
  return (
    <div className="w-full md:w-4/12 md:px-4" id="shipping-details">
      <div className="bg-gray-100 md:rounded-3xl px-4 py-6 md:p-8">
        {/* <!-- start: form --> */}
        <form action="success.html">
          {/* <!-- start: title form --> */}
          <div className="flex flex-start mb-6">
            <h3 className="text-xl md:text-2xl">Shipping Details</h3>
          </div>
          {/* <!-- end: title form --> */}

          {/* <!-- start: name form --> */}
          <div className="flex flex-col mb-4">
            <label for="complete-name" className="text-sm mb-2">
              Complete Name
            </label>
            <input
              data-input
              id="complete-name"
              className="
                      px-4
                      py-2
                      bg-white
                      text-sm
                      border border-gray-200
                      focus:outline-none focus:border-blue-200
                      rounded-lg
                    "
              placeholder="Input your name"
            />
          </div>
          {/* <!-- end: name form --> */}

          {/* <!-- start: email form --> */}
          <div className="flex flex-col mb-4">
            <label for="email-address" className="text-sm mb-2">
              Email Address
            </label>
            <input
              data-input
              id="email-address"
              type="email"
              className="
                      px-4
                      py-2
                      bg-white
                      border border-gray-200
                      rounded-lg
                      text-sm
                      focus:border-blue-200 focus:outline-none
                    "
              placeholder="Input your email address"
            />
          </div>
          {/* <!-- end: email form --> */}

          {/* <!-- start: address form --> */}
          <div className="flex flex-col mb-4">
            <label for="address" className="text-sm mb-2">
              Address
            </label>
            <input
              data-input
              id="address"
              type="text"
              className="
                      px-4
                      py-2
                      bg-white
                      border border-gray-200
                      rounded-lg
                      text-sm
                      focus:border-blue-200 focus:outline-none
                    "
              placeholder="Input your address"
            />
          </div>
          {/* <!-- end: address form --> */}

          {/* <!-- start: phone-number form --> */}
          <div className="flex flex-col mb-4">
            <label for="phone-number" className="text-sm mb-2">
              Phone Number
            </label>
            <input
              data-input
              id="phone-number"
              type="tel"
              className="
                      px-4
                      py-2
                      bg-white
                      border border-gray-200
                      rounded-lg
                      text-sm
                      focus:border-blue-200 focus:outline-none
                    "
              placeholder="Input your phone number"
            />
          </div>
          {/* <!-- end: phone-number form --> */}

          {/* <!-- start: courier form --> */}
          <div className="flex flex-col mb-4">
            <label for="courier-method" className="text-sm mb-2">
              Choose Courier
            </label>
            <div className="flex flex-wrap -mx-2">
              <div className="px-2 w-6/12 h-24">
                <button
                  data-value="fedex"
                  data-name="courier"
                  type="button"
                  className="
                          w-full
                          h-full
                          p-4
                          bg-white
                          rounded-xl
                          flex
                          justify-center
                          items-center
                          border border-gray-200
                          focus:outline-none focus:border-red-200
                        "
                >
                  <img
                    src="/images/content/courier/logo-courier1.png"
                    alt="LOGO COURIER 1"
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              <div className="px-2 w-6/12 h-24">
                <button
                  data-value="dhl"
                  data-name="courier"
                  type="button"
                  className="
                          w-full
                          h-full
                          p-4
                          bg-white
                          rounded-xl
                          flex
                          justify-center
                          items-center
                          border border-gray-200
                          focus:outline-none focus:border-red-200
                        "
                >
                  <img
                    src="/images/content/courier/logo-courier2.png"
                    alt="LOGO COURIER 2"
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
            </div>
          </div>
          {/* <!-- end: courier form --> */}

          {/* <!-- start: choose payment --> */}
          <div className="flex flex-col mb-4">
            <label for="payment-method" className="mb-2 text-sm">
              Choose Payment
            </label>

            <div className="flex flex-wrap -mx-2 mb-4">
              {/* <!-- start: payment-1 --> */}
              <div className="px-2 w-6/12 h-24">
                <button
                  data-value="midtrans"
                  data-name="payment"
                  type="button"
                  className="
                          w-full
                          h-full
                          p-4
                          bg-white
                          flex
                          justify-center
                          items-center
                          rounded-xl
                          border border-gray-200
                          focus:border-red-200 focus:outline-none
                        "
                >
                  <img
                    src="/images/content/payment/logo-payment1.png"
                    alt="LOGO PAYMENT 1"
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!-- end: payment-1 --> */}

              {/* <!-- start: payment 2 --> */}
              <div className="px-2 h-24 w-6/12 mb-4">
                <button
                  data-value="mastercard"
                  data-name="payment"
                  type="button"
                  className="
                          w-full
                          h-full
                          p-4
                          bg-white
                          flex
                          justify-center
                          items-center
                          rounded-xl
                          border border-gray-200
                          focus:outline-none focus:border-red-200
                        "
                >
                  <img
                    src="/images/content/payment/logo-payment2.png"
                    alt="LOGO PAYMENT 2"
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!-- end: payment 2 --> */}

              {/* <!-- start: payment 3 --> */}
              <div className="px-2 h-24 w-6/12 mb-4">
                <button
                  data-value="bitcoin"
                  data-name="payment"
                  type="button"
                  className="
                          w-full
                          h-full
                          p-4
                          bg-white
                          flex
                          justify-center
                          items-center
                          rounded-xl
                          border border-gray-200
                          focus:outline-none focus:border-red-200
                        "
                >
                  <img
                    src="/images/content/payment/logo-payment3.png"
                    alt="LOGO PAYMENT 3"
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!-- end: payment 3 --> */}

              {/* <!-- start: payment 4 --> */}
              <div className="px-2 h-24 w-6/12 mb-4">
                <button
                  data-value="american-express"
                  data-name="payment"
                  type="button"
                  className="
                          w-full
                          h-full
                          p-4
                          bg-white
                          flex
                          justify-center
                          items-center
                          rounded-xl
                          border border-gray-200
                          focus:outline-none focus:border-red-200
                        "
                >
                  <img
                    src="/images/content/payment/logo-payment4.png"
                    alt="LOGO PAYMENT 4"
                    className="object-contain max-h-full"
                  />
                </button>
              </div>
              {/* <!-- end: payment 4 --> */}
            </div>
          </div>
          {/* <!-- end: choose payment --> */}

          {/* <!-- start: btn-checkout --> */}
          <div className="text-center">
            <button
              type="submit"
              disabled
              className="
                      w-full
                      bg-pink-400
                      text-black
                      rounded-full
                      text-lg
                      focus:text-pink-400 focus:bg-black focus:outline-none
                      py-3
                      px-6
                      transition-all
                      duration-200
                    "
            >
              Checkout Now
            </button>
          </div>
          {/* <!-- end: btn-checkout --> */}
        </form>
        {/* <!-- end: form --> */}
      </div>
    </div>
  );
};

export default ShippingDetails;
