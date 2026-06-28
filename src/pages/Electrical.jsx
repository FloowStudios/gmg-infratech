import { FaWhatsapp } from "react-icons/fa";
import { ArrowDown } from "lucide-react";

import ElectricalProducts from "../components/Electrical/ElectricalProducts";
import ElectricalShowcase from "../components/Electrical/ElectricalShowcase";

const Electrical = () => {
  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Electrical.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero */}
        <div className="relative z-20 flex min-h-screen items-center px-5 sm:px-8 lg:px-16">

          <div className="max-w-3xl">

            <p className="uppercase tracking-[5px] sm:tracking-[6px] text-white text-[11px] sm:text-xs mb-4 sm:mb-6">
              GMG INFRATECH
            </p>

            <h1 className="text-white font-bold leading-tight
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl">

              Interior & Lighting
              <br />
              that matters.

            </h1>
            {/* whatsapp  */}
            <a
              href="https://wa.me/918860009636?text=Hi%20GMG%20Infratech,%20I%20want%20to%20know%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="
    mt-8
    sm:mt-10
    lg:mt-12

    inline-flex
    items-center
    gap-3

    bg-green-500
    hover:bg-green-600

    px-6
    sm:px-7
    lg:px-8

    py-3
    lg:py-4

    rounded-full

    text-white
    font-semibold

    text-sm
    sm:text-base

    tracking-wider

    transition
  "
            >
              <FaWhatsapp className="text-xl lg:text-2xl" />
              CHAT ON WHATSAPP
            </a>

          </div>

        </div>

        {/* Bottom Card */}

        <div
          className="
          absolute
          bottom-0
          left-0

          bg-white

          w-full
          sm:w-[340px]
          lg:w-[380px]

          px-6
          sm:px-8
          lg:px-10

          py-6
          sm:py-8
        "
        >

          <p className="uppercase tracking-[4px] text-gray-500 text-[10px] sm:text-xs">
            FARIDABAD, INDIA
          </p>

          <h2 className="mt-3 sm:mt-5 font-bold text-lg sm:text-xl lg:text-2xl">
            YOUR TRUSTABLE PARTNER
          </h2>

        </div>

        {/* Scroll Arrow */}

        <div
          className="
          hidden
          md:flex

          absolute
          bottom-8
          right-8
          lg:bottom-12
          lg:right-12

          w-16
          h-16
          lg:w-24
          lg:h-24

          rounded-full
          border
          border-white

          items-center
          justify-center

          z-20
        "
        >
          <ArrowDown className="text-white w-6 h-6 lg:w-8 lg:h-8" />
        </div>

      </section>

      {/* Sections */}

      <ElectricalProducts />

      <ElectricalShowcase />
    </>
  );
};

export default Electrical;