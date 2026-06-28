import Navbar from "./Navbar";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Hero = () => {
    return (
        <>
            <section
                className="relative min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/hero.webp')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/25"></div>

                {/* Navbar */}
                <Navbar />

                {/* Hero Content */}
                <div className="relative z-20 flex items-center min-h-screen px-5 sm:px-8 lg:px-16">

                    <div className="max-w-2xl">

                        <p className="uppercase tracking-[4px] sm:tracking-[5px] lg:tracking-[6px] text-white text-[11px] sm:text-xs mb-4 sm:mb-5 lg:mb-6">
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
                        </button>

                    </div>

                </div>

                {/* Bottom Left Box */}

                <div
                    className="
          absolute
          bottom-0
          left-0

          bg-white

          w-full
          sm:w-[340px]
          lg:w-[380px]

          h-auto
          lg:h-[140px]

          p-6
          sm:p-8
          lg:p-10

          z-20
        "
                >

                    <p className="uppercase tracking-[4px] text-gray-500 text-[10px] sm:text-xs">
                        FARIDABAD, INDIA
                    </p>

                    <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mt-3 lg:mt-5">
                        YOUR TRUSTABLE PARTNER
                    </h2>

                </div>

                {/* Down Arrow */}

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

            {/* Corporate Clients */}

            <section className="bg-[#eef2f6] py-8 lg:py-10">

                <div className="max-w-7xl mx-auto px-5 sm:px-8">

                    {/* Heading */}

                    <div className="flex items-center gap-4 lg:gap-6 mb-8">

                        <h4 className="uppercase tracking-[4px] text-[11px] text-gray-500 whitespace-nowrap font-medium">
                            Corporate Clients
                        </h4>

                        <div className="flex-1 h-px bg-gray-300"></div>

                    </div>

                    <Swiper
                        modules={[Autoplay]}
                        loop={true}
                        speed={2500}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                        }}
                    >
                        {[
                            "icici",
                            "airtel",
                            "incedo",
                            "jakson",
                            "bechtel",
                            "nsdc",
                        ].map((logo) => (
                            <SwiperSlide key={logo}>

                                <div className="flex items-center justify-center h-20">

                                    <img
                                        src={`/images/clients/${logo}.png`}
                                        alt={logo}
                                        className="h-10 lg:h-12 object-contain transition duration-300 hover:scale-110"
                                    />

                                </div>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>

            </section>
        </>
    );
};

export default Hero;