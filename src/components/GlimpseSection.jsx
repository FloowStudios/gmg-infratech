const GlimpseSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8 lg:mb-10">

          <div>

            <p className="uppercase tracking-[4px] lg:tracking-[5px] text-[10px] sm:text-xs text-gray-500 mb-2">
              GLIMPSE
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171c2c] leading-tight">
              Get a Glimpse of our Work
            </h2>

          </div>

          <button className="self-start lg:self-auto bg-[#171c2c] text-white px-7 sm:px-8 lg:px-10 py-3 lg:py-4 rounded-full tracking-[2px] lg:tracking-[3px] text-[11px] lg:text-xs hover:bg-black transition duration-300">
            VIEW ALL
          </button>

        </div>

        {/* Gallery */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">

          {/* Left Big */}

          <div className="lg:col-span-6 overflow-hidden group relative cursor-pointer">
            <img
              src="/images/glimpse/bechtel.png"
              alt=""
              className="w-full h-[260px] sm:h-[350px] lg:h-[430px] object-fill transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
          </div>

          {/* Middle */}

          <div className="lg:col-span-3 overflow-hidden group relative cursor-pointer">
            <img
              src="/images/glimpse/cabin.png"
              alt=""
              className="w-full h-[260px] sm:h-[350px] lg:h-[430px] object-cover transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
          </div>

          {/* Right */}

          <div className="lg:col-span-3 overflow-hidden group relative cursor-pointer">
            <img
              src="/images/glimpse/workspace.png"
              alt=""
              className="w-full h-[260px] sm:h-[350px] lg:h-[430px] object-cover transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
          </div>

          {/* Bottom Left */}

          <div className="lg:col-span-3 overflow-hidden group relative cursor-pointer">
            <img
              src="/images/glimpse/icici.png"
              alt=""
              className="w-full h-[220px] sm:h-[260px] lg:h-[260px] object-cover transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
          </div>

          {/* Bottom Center */}

          <div className="lg:col-span-6 overflow-hidden group relative cursor-pointer">
            <img
              src="/images/glimpse/office.png"
              alt=""
              className="w-full h-[220px] sm:h-[260px] lg:h-[260px] object-cover transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>
          </div>

          {/* Bottom Right */}

          <div className="lg:col-span-3 overflow-hidden group relative cursor-pointer">
            <img
              src="/images/glimpse/civil.png"
              alt=""
              className="w-full h-[220px] sm:h-[260px] lg:h-[260px] object-cover transition-all duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition duration-500"></div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GlimpseSection;