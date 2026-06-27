import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0d1324] to-[#080b16] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-8 py-14">

        <div className="grid lg:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-bold tracking-tight">
              GMG
            </h2>

            <h3 className="text-2xl font-light tracking-[6px] text-gray-300 mb-5">
              INFRATECH
            </h3>

            <p className="text-gray-400 text-sm leading-7">
              Transforming residential and commercial spaces with
              premium interiors, civil construction and modern
              lighting solutions.
            </p>

          </div>

          {/* Navigation */}

          <div className="border-l border-white/10 pl-8">

            <h4 className="uppercase tracking-[4px] text-xs text-gray-500 mb-6">
              Navigation
            </h4>

            <div className="space-y-4">

              {[
                ["Home", "/"],
                ["COMMERCIAL/ CIVIL", "/commercial-civil"],
                ["Electrical", "/electrical"],
                ["Contact", "/contact"],
              ].map(([title, link]) => (
                <Link
                  key={title}
                  to={link}
                  className="block text-gray-300 hover:text-white hover:translate-x-2 duration-300"
                >
                  {title}
                </Link>
              ))}

            </div>

          </div>

          {/* Contact */}

          <div className="border-l border-white/10 pl-8">

            <h4 className="uppercase tracking-[4px] text-xs text-gray-500 mb-6">
              Contact
            </h4>

            <div className="space-y-5">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-yellow-400" />
                <span className="text-gray-300 text-sm">
                  Faridabad, Haryana
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-yellow-400" />
                <span className="text-gray-300 text-sm">
                  +91 8860009636
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-yellow-400" />
                <span className="text-gray-300 text-sm">
                  helpdesk@gmginfratech.com
                </span>
              </div>

            </div>

          </div>

          {/* Social */}

          <div className="border-l border-white/10 pl-8">

            <h4 className="uppercase tracking-[4px] text-xs text-gray-500 mb-6">
              Connect
            </h4>

            <div className="flex gap-4">

              {[
                FaInstagram,
                FaFacebookF,
                FaLinkedinIn,
                FaWhatsapp,
              ].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-11 h-11 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-yellow-500 hover:text-black hover:scale-110 transition-all duration-300"
                >
                  <Icon />
                </a>
              ))}

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-8 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GMG Infratech. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm mt-3 md:mt-0">
            Designed & Developed by
            <span className="text-yellow-400 font-medium ml-1">
              Floow Studios
            </span>
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;