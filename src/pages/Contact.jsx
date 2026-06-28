import Navbar from "../components/Navbar";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/hero.webp')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Navbar */}
      <Navbar />

      {/* Contact Container */}
      <div
        className="git 
          relative
          z-20

          flex
          items-center
          justify-center

          min-h-screen

          px-4
          sm:px-6
          lg:px-8

          pt-28
          lg:pt-24

          pb-10
          lg:pb-0
        "
      >
        <div className="w-full max-w-6xl">

          <div
            className="
              grid

              grid-cols-1
              lg:grid-cols-[1fr_1.08fr]

              rounded-xl
              overflow-hidden

              shadow-[0_25px_60px_rgba(0,0,0,0.35)]
            "
          >
            <ContactInfo />

            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;