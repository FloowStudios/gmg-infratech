import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      name: "HOME",
      path: "/",
    },
    {
      name: "COMMERCIAL / CIVIL",
      path: "/commercial-civil",
    },
    {
      name: "ELECTRICAL",
      path: "/electrical",
    },
    {
      name: "CONTACT",
      path: "/contact",
    },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50">

      <div className="max-w-8xl mx-auto flex items-center justify-between  px-7 sm:px-8 lg:px-16 py-5">

        {/* Logo */}

        <NavLink to="/">
          <img
            src="/images/logo.png"
            alt="GMG Infratech"
            className="w-28 sm:w-36 lg:w-40  object-contain"
          />
        </NavLink>

        {/* Desktop Navigation */}

        <nav className="hidden lg:flex items-center gap-10">

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `uppercase tracking-[3px] text-sm font-medium transition-all duration-50 pb-2 ${
                  isActive
                    ? "text-white border-b border-white"
                    : "text-white hover:text-gray-300"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}

        </nav>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden text-white"
        >
          <Menu size={32} />
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >

        <div
          className={`absolute top-0 right-0 h-full w-[280px] bg-[#0b1020] transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* Close */}

          <div className="flex justify-end p-6">

            <button
              onClick={() => setIsOpen(false)}
              className="text-white"
            >
              <X size={30} />
            </button>

          </div>

          {/* Links */}

          <nav className="flex flex-col mt-8">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `px-8 py-5 uppercase tracking-[3px] border-b border-white/10 transition ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white hover:bg-white/10"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

          </nav>

        </div>

      </div>

    </header>
  );
};

export default Navbar;