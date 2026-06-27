const ProjectsSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">

        {/* Header */}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">

          <div>

            <p className="uppercase tracking-[5px] text-[11px] text-gray-500 mb-3">
              OUR PROJECTS
            </p>

            <h2 className="text-[#151C2E] font-bold leading-tight
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[46px]">
              Commercial & Civil
            </h2>

            <div className="w-24 h-1 bg-[#1B2237] mt-5 rounded-full"></div>

          </div>

          <button
            className="
            border
            border-[#151C2E]
            text-[#151C2E]
            px-7
            py-3
            rounded-full
            font-semibold
            tracking-wider
            hover:bg-[#151C2E]
            hover:text-white
            transition-all
            duration-300
          "
          >
            VIEW FULL PORTFOLIO
          </button>

        </div>

        {/* Gallery */}

        <div className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer">

          {/* Desktop */}

          <img
            src="/images/commercialcivil/projects-gallery.png"
            alt="Commercial & Civil Projects"
            className="
            hidden
            md:block
            w-full
            h-auto
            object-cover
            transition-all
            duration-700
            group-hover:scale-[1.03]
          "
          />

          {/* Mobile */}

          <img
            src="/images/commercialcivil/projects-gallery-mobile.png"
            alt="Commercial & Civil Projects"
            className="
            block
            md:hidden
            w-full
            h-auto
            object-cover
            transition-all
            duration-700
            group-hover:scale-[1.03]
          "
          />

          {/* Overlay */}

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/25
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
          "
          ></div>

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;