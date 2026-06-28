import { motion } from "framer-motion";

const services = [
  {
    title: "Civil Work",
    image: "/images/services/civil.png",
    description:
      "Complete civil construction and renovation solutions for commercial and residential spaces.",
  },
  {
    title: "Commercial",
    image: "/images/services/residential.png",
    description:
      "Modern interior designing and turnkey execution for homes and offices.",
  },
  {
    title: "Buy Premium Lighting",
    image: "/images/services/lighting.png",
    description:
      "Premium decorative and architectural lighting solutions for every project.",
  },
];

const headingVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Services = () => {
  return (
    <section className="bg-white pt-20 sm:pt-28 lg:pt-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          variants={headingVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[10px] sm:text-xs text-gray-500 mb-3 sm:mb-4">
            SERVICES
          </p>

          <h2
            className="
              text-3xl
              sm:text-5xl
              lg:text-6xl
              font-bold
              text-gray-900
              mb-10
              sm:mb-14
              lg:mb-16
            "
          >
            We do it best.
          </h2>
        </motion.div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -120 : 120,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group border border-gray-200 bg-white hover:shadow-xl transition-all duration-500"
            >
              <div className="overflow-hidden">

                <img
                  src={service.image}
                  alt={service.title}
                  className="
                    w-full
                    h-56
                    sm:h-64
                    lg:h-72
                    object-cover
                    object-right
                    group-hover:scale-110
                    transition-transform
                    duration-700
                  "
                />

              </div>

              <div className="p-5 sm:p-6">

                <h3 className="text-2xl lg:text-3xl font-semibold mb-3 lg:mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-500 leading-7 lg:leading-8 text-sm sm:text-base">
                  {service.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Portfolio */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8 mt-14 sm:mt-20 lg:mt-24">

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
            }}
            className="md:col-span-2 overflow-hidden"
          >
            <img
              src="/images/portfolio/airtel.png"
              alt="Airtel Office"
              className="
                w-full
                h-64
                sm:h-80
                lg:h-[420px]
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="overflow-hidden"
          >
            <img
              src="/images/portfolio/icici.png"
              alt="ICICI Office"
              className="
                w-full
                h-64
                sm:h-80
                lg:h-[420px]
                object-cover
                transition-transform
                duration-700
                hover:scale-105
              "
            />
          </motion.div>

        </div>

        {/* Bottom Strip */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
          }}
          className="bg-[#eef0f7] text-center py-5 sm:py-7 lg:py-8 mt-2"
        >

          <h3
            className="
              uppercase
              font-semibold
              text-sm
              sm:text-base
              lg:text-lg
              tracking-[2px]
              sm:tracking-[4px]
              lg:tracking-[5px]
              px-4
            "
          >
            10+ Years Associated With Airtel & ICICI Bank
          </h3>

        </motion.div>

      </div>
    </section>
  );
};

export default Services;