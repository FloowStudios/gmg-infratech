import { FaWhatsapp } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import ProjectsSection from "../components/commercial/civil/ProjectsSection";

const Commercialcivil = () => {
  const features = [
    "OFFICE MAINTENANCE",
    "CUSTOM FURNITURE",
    "CUSTOM OFFICE INTERIOR",
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Commercialcivil.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Hero Content */}
        <div className="relative z-20 flex min-h-screen items-center px-5 sm:px-8 lg:px-16">
          <div className="max-w-xl lg:max-w-2xl">

            <p className="uppercase tracking-[4px] sm:tracking-[6px] text-white text-[11px] sm:text-xs mb-4 sm:mb-6">
              GMG INFRATECH
            </p>

            <h1
              className="
                text-white
                font-bold
                leading-tight
                text-4xl
                sm:text-5xl
                md:text-6xl
                lg:text-7xl
              "
            >
              Interior & Lighting
              <br />
              that matters.
            </h1>

            <button
              className="
                mt-8
                sm:mt-10
                lg:mt-12
                inline-flex
                items-center
                gap-3
                bg-[#25D366]
                hover:bg-[#1fb759]
                px-6
                sm:px-8
                py-3
                sm:py-4
                rounded-full
                text-white
                text-sm
                sm:text-base
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              <FaWhatsapp className="text-xl sm:text-2xl" />
              CHAT ON WHATSAPP
            </button>

          </div>
        </div>

        {/* Bottom Info Box */}
        <div
          className="
            absolute
            bottom-0
            left-0
            bg-white
            w-full
            sm:w-[330px]
            lg:w-[380px]
            px-6
            sm:px-8
            lg:px-10
            py-6
            sm:py-8
            z-20
          "
        >
          <p className="uppercase tracking-[4px] text-gray-500 text-[10px] sm:text-xs">
            FARIDABAD, INDIA
          </p>

          <h2 className="mt-3 sm:mt-5 text-lg sm:text-xl lg:text-2xl font-bold text-[#151C2E]">
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
            border
            border-white
            rounded-full
            items-center
            justify-center
            z-20
          "
        >
          <ArrowDown className="text-white w-6 h-6 lg:w-8 lg:h-8" />
        </div>
      </section>

      {/* Feature Bar */}
      <section className="bg-[#EEF2F8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3">

            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-center py-6 sm:py-7 lg:py-8 px-4 ${
                  index !== 2 ? "md:border-r border-gray-300" : ""
                }`}
              >
                <h3
                  className="
                    text-[11px]
                    sm:text-xs
                    lg:text-[13px]
                    tracking-[3px]
                    sm:tracking-[5px]
                    font-semibold
                    uppercase
                    text-[#1B2237]
                    text-center
                  "
                >
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Projects */}
      <ProjectsSection />
    </>
  );
};

export default Commercialcivil;