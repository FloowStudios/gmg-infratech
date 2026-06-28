import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const products = [
  {
    title: "DELTA COB LIGHTS",
    image: "/images/products/delta-cob.png",
  },
  {
    title: "ALTIS COB",
    image: "/images/products/altis-cob.png",
  },
  {
    title: "MAGNETIC TRACK LIGHTS",
    image: "/images/products/magnetic-track.png",
  },
  {
    title: "ROYAL CYLINDER",
    image: "/images/products/royal-cylinder.png",
  },
  {
    title: "DOWNLIGHTS",
    image: "/images/products/downlights.png",
  },
  {
    title: "FLAT DOWNLIGHTS",
    image: "/images/products/flat-downlights.png",
  },
];

const LightingSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10 lg:mb-12">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[10px] sm:text-xs text-gray-500 mb-2 sm:mb-3">
              BUY FROM US
            </p>

            <h2
              className="
                text-[#171c2c]
                font-bold
                leading-tight
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-5xl
              "
            >
              Lighting for your
              <br className="hidden sm:block" />
              Home & Offices
            </h2>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() => navigate("/electrical")}
            className="
              self-start
              lg:self-auto

              bg-[#171c2c]
              hover:bg-black

              text-white
              uppercase

              tracking-[2px]
              sm:tracking-[3px]

              text-[11px]
              sm:text-xs

              px-6
              sm:px-8
              lg:px-10

              py-3
              sm:py-4

              rounded-full

              transition-all
              duration-300

              hover:scale-105
            "
          >
            View All
          </motion.button>

        </div>

        {/* Products */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

          {products.map((product, index) => (
            <motion.div
              key={index}
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
                amount: 0.25,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                overflow-hidden
                border
                border-gray-100
                cursor-pointer
              "
            >

              <img
                src={product.image}
                alt={product.title}
                className="
                  w-full
                  h-[320px]
                  sm:h-[360px]
                  lg:h-[420px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>

              {/* Product Title */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full

                  bg-gradient-to-t
                  from-black/80
                  via-black/40
                  to-transparent

                  p-6

                  translate-y-full
                  group-hover:translate-y-0

                  transition-all
                  duration-500
                "
              >
                <h3 className="text-white text-xl font-semibold tracking-wide">
                  {product.title}
                </h3>
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default LightingSection;