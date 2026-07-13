import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32">

      {/* Hero */}

      <section className="text-center px-6">

        <h1 className="text-4xl md:text-6xl font-bold">
          Contact Us
        </h1>

        <p className="text-gray-400 mt-5 max-w-3xl mx-auto text-lg">
          Ready to build your next Adventure Park?
          Let's discuss your project today.
        </p>

      </section>

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">

        {/* Left Side */}

        <div>

          <h2 className="text-4xl font-bold mb-10">
            Let's Build Something Amazing
          </h2>

          <div className="space-y-8">

            <div className="flex items-center gap-5 bg-slate-900 p-6 rounded-2xl">

              <FaPhoneAlt className="text-orange-500 text-3xl"/>

              <div>
                <h3 className="font-bold text-xl">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +91 9876543210
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5 bg-slate-900 p-6 rounded-2xl">

              <FaEnvelope className="text-orange-500 text-3xl"/>

              <div>
                <h3 className="font-bold text-xl">
                  Email
                </h3>

                <p className="text-gray-400">
                  info@ziplineasia.com
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5 bg-slate-900 p-6 rounded-2xl">

              <FaMapMarkerAlt className="text-orange-500 text-3xl"/>

              <div>

                <h3 className="font-bold text-xl">
                  Office
                </h3>

                <p className="text-gray-400">
                  Chandigarh, India
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5 bg-slate-900 p-6 rounded-2xl">

              <FaWhatsapp className="text-green-500 text-3xl"/>

              <div>

                <h3 className="font-bold text-xl">
                  WhatsApp
                </h3>

                <p className="text-gray-400">
                  +91 9876543210
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="bg-slate-900 rounded-3xl p-10">

          <h2 className="text-3xl font-bold mb-8">
            Send Inquiry
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-orange-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-orange-500"
            />

            <input
              type="text"
              placeholder="Project Location"
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-orange-500"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              className="w-full p-4 rounded-xl bg-slate-800 border border-slate-700 outline-none focus:border-orange-500"
            ></textarea>

            <button className="w-full bg-orange-500 hover:bg-orange-600 py-4 rounded-xl text-lg font-semibold transition">
              Send Inquiry
            </button>

          </form>

        </div>

      </section>

    </div>
  );
}