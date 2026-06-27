import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div
      className="
        relative

        bg-black/45
        backdrop-blur-[2px]

        text-white

        min-h-[380px]
        sm:min-h-[450px]
        lg:h-[560px]

        px-6
        sm:px-8
        lg:px-16

        py-8
        sm:py-10
        lg:py-16

        flex
        flex-col
        justify-center
      "
    >
      {/* Overlay */}

      <div className="absolute inset-0 bg-black/25"></div>

      {/* Content */}

      <div className="relative z-10">

        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold mb-4 lg:mb-5">
          Contact Information
        </h2>

        <p className="text-gray-300 text-base sm:text-lg leading-7 sm:leading-8 mb-8 sm:mb-10 lg:mb-14">
          Fill the form and we will contact you soon!
        </p>

        {/* Contact Items */}

        <div className="space-y-6 sm:space-y-8 lg:space-y-9">

          {/* Phone */}

          <div className="flex items-center gap-4 sm:gap-5">

            <div
              className="
                w-10
                h-10
                sm:w-12
                sm:h-12

                rounded-full
                border
                border-white/20

                flex
                items-center
                justify-center

                flex-shrink-0
              "
            >
              <FaPhoneAlt className="text-base sm:text-lg" />
            </div>

            <span className="text-base sm:text-lg break-words">
              +91 8860009636
            </span>

          </div>

          {/* Email */}

          <div className="flex items-center gap-4 sm:gap-5">

            <div
              className="
                w-10
                h-10
                sm:w-12
                sm:h-12

                rounded-full
                border
                border-white/20

                flex
                items-center
                justify-center

                flex-shrink-0
              "
            >
              <FaEnvelope className="text-base sm:text-lg" />
            </div>

            <span className="text-base sm:text-lg break-all">
              helpdesk@gmginfratech.com
            </span>

          </div>

          {/* Address */}

          <div className="flex items-center gap-4 sm:gap-5">

            <div
              className="
                w-10
                h-10
                sm:w-12
                sm:h-12

                rounded-full
                border
                border-white/20

                flex
                items-center
                justify-center

                flex-shrink-0
              "
            >
              <FaMapMarkerAlt className="text-base sm:text-lg" />
            </div>

            <span className="text-base sm:text-lg break-words">
              Faridabad, Haryana
            </span>

          </div>

        </div>

      </div>

      {/* Bottom Glow */}

      <div
        className="
          absolute
          -bottom-20
          -left-20

          w-56
          h-56

          sm:w-72
          sm:h-72

          bg-white/5
          blur-[120px]
          rounded-full
        "
      />
    </div>
  );
};

export default ContactInfo;