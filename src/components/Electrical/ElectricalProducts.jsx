const ElectricalProducts = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-8">

        {/* Heading */}
        <p className="uppercase tracking-[5px] text-[11px] text-gray-500 mb-3">
          BUY FROM US
        </p>

        <h2 className="text-[46px] font-bold text-[#151C2E] mb-10">
          Lighting for your Home & Offices
        </h2>

        {/* Desktop Image */}
        <div className="relative overflow-hidden rounded-sm group cursor-pointer">

          <img
            src="/images/Electrical/lighting-products.png"
            alt="Lighting Products"
            className="hidden md:block w-full h-auto object-cover transition-all duration-700 "
          />

          {/* Mobile Image */}
          <img
            src="/images/Electrical/lighting-products-mobile.png"
            alt="Lighting Products"
            className="block md:hidden w-full h-auto object-cover transition-all duration-700 group-hover:scale-105"
          />

          

        </div>

      </div>
    </section>
  );
};

export default ElectricalProducts;