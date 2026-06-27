import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaHeadset,
  FaPen,
} from "react-icons/fa";

const ContactForm = () => {
  return (
    <div
      className="
      bg-white

      min-h-[520px]
      lg:h-[560px]

      px-5
      sm:px-8
      lg:px-12

      py-6
      sm:py-8
      lg:py-10

      flex
      flex-col
      justify-between
    "
    >
      {/* Header */}

      <div>

        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">

          {/* Title */}

          <div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#161D2E]">
              GET IN TOUCH
            </h2>

            <div className="w-14 h-1 bg-[#3B82F6] rounded-full mt-3"></div>

          </div>

          {/* Reply Box */}

          <div className="flex items-center gap-4">

            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#EEF5FF] flex items-center justify-center">

              <FaHeadset className="text-[#3B82F6] text-xl sm:text-2xl" />

            </div>

            <div>

              <p className="text-xs sm:text-sm text-gray-500">
                We typically reply
              </p>

              <p className="text-xs sm:text-sm font-semibold text-[#3B82F6]">
                within 24 hours
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Form */}

      <form className="space-y-5 mt-6 lg:mt-8">

        {/* Email + Phone */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

          {/* Email */}

          <div className="relative">

            <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="email"
              placeholder="Email Address"
              className="
              w-full
              h-12
              sm:h-14

              border
              border-gray-200

              rounded-lg

              pl-14
              pr-4

              text-sm
              sm:text-base

              outline-none

              focus:border-[#3B82F6]

              transition
            "
            />

          </div>

          {/* Phone */}

          <div className="relative">

            <FaPhoneAlt className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

            <input
              type="text"
              placeholder="Phone Number"
              className="
              w-full
              h-12
              sm:h-14

              border
              border-gray-200

              rounded-lg

              pl-14
              pr-4

              text-sm
              sm:text-base

              outline-none

              focus:border-[#3B82F6]

              transition
            "
            />

          </div>

        </div>

        {/* Message */}

        <div className="relative">

          <FaPen className="absolute left-5 top-5 text-gray-400" />

          <textarea
            rows={6}
            placeholder="Type your message..."
            className="
            w-full

            border
            border-gray-200

            rounded-lg

            pl-14
            pr-5
            pt-5

            text-sm
            sm:text-base

            resize-none

            outline-none

            focus:border-[#3B82F6]

            transition
          "
          ></textarea>

          <span className="absolute bottom-4 right-5 text-xs text-gray-400">
            0 / 1000
          </span>

        </div>

        {/* Button */}

        <button
          type="submit"
          className="
          w-full

          h-12
          sm:h-14

          rounded-lg

          overflow-hidden

          bg-gradient-to-r
          from-[#101828]
          via-[#0F172A]
          to-[#0F172A]

          text-white

          font-semibold

          tracking-[1px]
          sm:tracking-[2px]

          flex
          items-center
          justify-between

          pl-6
          sm:pl-8

          hover:scale-[1.01]

          transition-all
          duration-300

          shadow-lg
        "
        >

          <span className="flex-1 text-center text-sm sm:text-base">
            SEND MESSAGE
          </span>

          <span
            className="
            w-12
            h-12

            sm:w-14
            sm:h-14

            bg-[#3B82F6]

            flex
            items-center
            justify-center
          "
          >
            <FaPaperPlane className="text-white text-sm sm:text-base" />
          </span>

        </button>

      </form>

    </div>
  );
};

export default ContactForm;