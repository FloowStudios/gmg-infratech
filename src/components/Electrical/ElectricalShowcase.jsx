const ElectricalShowcase = () => {
  return (
    <section className="bg-white py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-6 md:mb-10">
          <p className="uppercase tracking-[5px] text-[10px] md:text-xs text-gray-500 mb-2">
            BUY FROM US
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#151C2E] leading-tight">
            Accessories for Magnetic Range
          </h2>
        </div>

        {/* Images */}
        <div className="relative overflow-hidden rounded-md group cursor-pointer">

          {/* Desktop */}
          <img
            src="/images/Electrical/showcase-desktop.png"
            alt="Accessories for Magnetic Range"
            className="hidden md:block w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Mobile */}
          <img
            src="/images/Electrical/showcase-mobile.png"
            alt="Accessories for Magnetic Range"
            className="block md:hidden w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 pointer-events-none"></div>

        </div>

      </div>
    </section>
  );
};

export default ElectricalShowcase;