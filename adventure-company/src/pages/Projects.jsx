import Spicecamp from "../assets/Spicecamp.png";
import Arriba from "../assets/Arriba.png";
import third from "../assets/third.png";
import Mandavar from "../assets/Mandavar.png";
import five from "../assets/five.png";
import bridge from "../assets/bridge.png";





import { FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function Projects() {

  const projects = [
    {
      title: "SPICE CAMPS",
      image : Spicecamp,
      location: "Nauradhar, Himachal Pradesh",
      type: "Adventure Camp Development"
    },
    {
      title: "ARRIBA ADVENTURE",
      image : Arriba,
      location: "Chandigarh",
      type: "Adventure Park Installation"
    },
    {
      title: "ARAVALI ORCHARD",
      image : third,
      location: "Gurugram, Haryana",
      type: "Adventure Activities"
    },
    {
      title: "MANDAVAR NATURE PARK",
      image : Mandavar,
      location: "Mandi, Himachal Pradesh",
      type: "Nature Adventure Park"
    },
    {
      title: "BAKHLI NATURE PARK",
      image : five,
      location: "Pandoh, Himachal Pradesh",
      type: "Outdoor Adventure Zone"
    },
    {
      title: "SUSPENSION FOOTOVER BRIDGES",
      image : bridge,
      location: "Gohar",
      type: "Bridge Engineering"
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-32">

      {/* Hero */}

      <section className="text-center">

        <h1 className="text-6xl font-bold">
          Our Landmark Projects
        </h1>

        <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-xl">
          Delivering world-class adventure infrastructure,
          engineering excellence and unforgettable outdoor experiences.
        </p>

      </section>

      {/* Projects */}

      <section className="max-w-7xl mx-auto px-8 py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project,index)=>(

            <div
              key={index}
              className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-700 hover:border-orange-500 hover:-translate-y-3 duration-300"
            >
<img
  src={project.image}
  alt={project.title}
  className="w-full h-64 object-cover"
/>
              <div className="p-8">

                <h2 className="text-2xl font-bold">
                  {project.title}
                </h2>

                <p className="flex items-center gap-2 text-gray-400 mt-3">
                  <FaMapMarkerAlt />
                  {project.location}
                </p>

                <p className="mt-4 text-gray-300">
                  {project.type}
                </p>

                <button className="mt-8 bg-orange-500 px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-orange-600">
                  View Case Study
                  <FaArrowRight/>
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* Stats */}

      <section className="bg-orange-500 py-20">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 text-center gap-10">

          <div>
            <h2 className="text-5xl font-bold">150+</h2>
            <p>Projects Delivered</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">18+</h2>
            <p>States Covered</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">30+</h2>
            <p>Years Experience</p>
          </div>

          <div>
            <h2 className="text-5xl font-bold">100%</h2>
            <p>Safety Focused</p>
          </div>

        </div>

      </section>

    </div>
  );
}