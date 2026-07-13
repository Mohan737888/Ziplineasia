import {
  FaMountain,
  FaTools,
  FaTree,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "Zip Line Installation",
    desc: "Professional zip line design and installation with international safety standards.",
    icon: <FaMountain size={40} />,
  },
  {
    title: "Rope Course",
    desc: "High and low rope courses for schools, resorts and adventure parks.",
    icon: <FaTree size={40} />,
  },
  {
    title: "Climbing Wall",
    desc: "Indoor and outdoor climbing walls for all skill levels.",
    icon: <FaMountain size={40} />,
  },
  {
    title: "Adventure Towers",
    desc: "Multi-activity adventure towers with customized design.",
    icon: <FaTools size={40} />,
  },
  {
    title: "Adventure Park Design",
    desc: "Complete planning, design and construction of adventure parks.",
    icon: <FaTree size={40} />,
  },
  {
    title: "Maintenance",
    desc: "Inspection, repair and annual maintenance services.",
    icon: <FaTools size={40} />,
  },
];

export default function Services() {
  return (
    <section className="bg-[#060b1f] py-24 px-8">
      <div className="max-w-7xl mx-auto">

        <h4 className="text-orange-500 uppercase tracking-widest text-center font-semibold">
          Our Services
        </h4>

        <h2 className="text-5xl font-bold text-white text-center mt-3">
          Complete Adventure Solutions
        </h2>

        <p className="text-gray-400 text-center mt-5 max-w-3xl mx-auto">
          We design, manufacture and install world-class adventure attractions
          for resorts, schools, amusement parks and tourism destinations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {services.map((item, index) => (

            <div
              key={index}
              className="bg-[#10182d] rounded-3xl p-8 hover:-translate-y-3 duration-300 hover:shadow-orange-500/20 shadow-xl group"
            >

              <div className="text-orange-500 mb-6 group-hover:scale-110 duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>

              <button className="mt-8 text-orange-500 flex items-center gap-2 hover:gap-4 duration-300">
                Learn More
                <FaArrowRight />
              </button>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}