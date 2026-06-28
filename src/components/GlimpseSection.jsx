import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const images = [
  {
    src: "/images/glimpse/bechtel.webp",
    span: "lg:col-span-6",
    height: "h-[260px] sm:h-[350px] lg:h-[430px]",
    fit: "object-fill",
    from: { x: -120, y: -80 },
  },
  {
    src: "/images/glimpse/cabin.webp",
    span: "lg:col-span-3",
    height: "h-[260px] sm:h-[350px] lg:h-[430px]",
    fit: "object-cover",
    from: { x: 120, y: -80 },
  },
  {
    src: "/images/glimpse/workspace.webp",
    span: "lg:col-span-3",
    height: "h-[260px] sm:h-[350px] lg:h-[430px]",
    fit: "object-cover",
    from: { x: 120, y: 80 },
  },
  {
    src: "/images/glimpse/icici.webp",
    span: "lg:col-span-3",
    height: "h-[220px] sm:h-[260px] lg:h-[260px]",
    fit: "object-cover",
    from: { x: -120, y: 80 },
  },
  {
    src: "/images/glimpse/office.webp",
    span: "lg:col-span-6",
    height: "h-[220px] sm:h-[260px] lg:h-[260px]",
    fit: "object-cover",
    from: { x: 0, y: 120 },
  },
  {
    src: "/images/glimpse/civil.webp",
    span: "lg:col-span-3",
    height: "h-[220px] sm:h-[260px] lg:h-[260px]",
    fit: "object-cover",
    from: { x: 120, y: 80 },
  },
];

const GlimpseSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 lg:mb-10">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .7,
            }}
          >

            <p className="uppercase tracking-[4px] lg:tracking-[5px] text-[10px] sm:text-xs text-gray-500 mb-2">
              GLIMPSE
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171c2c] leading-tight">
              Get a Glimpse of our Work
            </h2>

          </motion.div>

          <motion.button
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .7,
            }}
            onClick={() => navigate("/commercial-civil")}
            className="
              self-start
              lg:self-auto
              bg-[#171c2c]
              text-white
              px-7
              sm:px-8
              lg:px-10
              py-3
              lg:py-4
              rounded-full
              tracking-[2px]
              text-[11px]
              hover:bg-black
              hover:scale-105
              transition
            "
          >
            VIEW ALL
          </motion.button>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3">

          {images.map((image, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: image.from.x,
                y: image.from.y,
                scale: .85,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: .15,
              }}
              transition={{
                duration: .7,
                ease: "easeOut",
                delay: index * .12,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className={`
                col-span-1
                ${image.span}
                relative
                overflow-hidden
                rounded-md
                shadow-lg
                group
                cursor-pointer
              `}
            >
                            <img
                src={image.src}
                alt="GMG Infratech Project"
                loading={index < 2 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index < 2 ? "high" : "auto"}
                className={`
                  w-full
                  ${image.height}
                  ${image.fit}

                  transition-all
                  duration-700
                  ease-out

                  group-hover:scale-110
                `}
              />

              {/* Dark Overlay */}

              <div
                className="
                  absolute
                  inset-0

                  bg-black/0

                  group-hover:bg-black/10

                  transition-all
                  duration-500
                "
              ></div>

              {/* Shine Effect */}

              <motion.div
                initial={{
                  x: "-150%",
                }}
                whileHover={{
                  x: "150%",
                }}
                transition={{
                  duration: 0.8,
                }}
                className="
                  absolute
                  inset-0

                  bg-gradient-to-r
                  from-transparent
                  via-white/30
                  to-transparent

                  rotate-12
                "
              />

              {/* Border Glow */}

              <div
                className="
                  absolute
                  inset-0

                  border
                  border-transparent

                  group-hover:border-white/20

                  transition-all
                  duration-500
                "
              />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default GlimpseSection;