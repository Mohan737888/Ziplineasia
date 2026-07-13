import {
  FaMountain,
  FaTree,
  FaShieldAlt,
  FaTools,
  FaCampground,
  FaRoute,
} from "react-icons/fa";

function Services() {
  const services = [
    {
      icon: <FaRoute size={45} />,
      title: "Zip Line",
      desc: "International standard zip line installation with complete safety."
    },
    {
      icon: <FaTree size={45} />,
      title: "Rope Course",
      desc: "Low & High Rope Courses for schools, resorts and parks."
    },
    {
      icon: <FaMountain size={45} />,
      title: "Climbing Wall",
      desc: "Artificial climbing walls for indoor & outdoor adventure parks."
    },
    {
      icon: <FaCampground size={45} />,
      title: "Adventure Parks",
      desc: "Complete adventure park planning, design & execution."
    },
    {
      icon: <FaTools size={45} />,
      title: "Installation",
      desc: "Professional installation with certified equipment."
    },
    {
      icon: <FaShieldAlt size={45} />,
      title: "Safety Inspection",
      desc: "Annual maintenance, inspection & safety certification."
    },
  ];

  return (
    <section className="bg-slate-900 py-24 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h4 className="text-orange-500 font-semibold uppercase tracking-widest text-center">
          Our Services
        </h4>

        <h2 className="text-5xl font-bold text-center mt-4">
          Complete Adventure Solutions
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-3xl mx-auto">
          We provide world-class adventure park design, manufacturing,
          installation and annual maintenance across India.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 hover:bg-orange-500 transition duration-300 group shadow-lg"
            >
              <div className="text-orange-500 group-hover:text-white mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300 group-hover:text-white leading-7">
                {item.desc}
              </p>

              <button className="mt-6 font-semibold">
                Learn More →
              </button>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Services;