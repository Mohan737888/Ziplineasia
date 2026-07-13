import towers from "../assets/towers.png";
import  climbing from "../assets/climbing.png";
import KidsAdventurepark from "../assets/KidsAdventurepark.png";
import Netcourse from "../assets/Netcourse.png";
import Ropecourse from "../assets/Ropecourse.png";
import Zipline from "../assets/Zipline.png";

export default function Products() {
  const products = [

    {
      title: "Zip Line",
      image : Zipline,
      desc: "Professional zip line systems for resorts and adventure parks."
    },
    {
      title: "Rope Course",
      image : Ropecourse,
      desc: "High Rope & Low Rope Courses designed to international standards."
    },
    {
      title: "Climbing Wall",
      image : climbing,
      desc: "Indoor & Outdoor climbing walls for all skill levels."
    },
    {
      title: "Adventure Tower",
      image: towers,
      desc: "Multi-activity towers with climbing, rappelling and bridges."
        
    },
    {
      title: "Kids Adventure Park",
        image: KidsAdventurepark,
      desc: "Safe adventure structures specially designed for children."
    },
    {
      title: "Net Course",
        image: Netcourse,
      desc: "Sky nets, suspension bridges and aerial obstacles."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-28">

      {/* Hero */}

      <section className="text-center py-20">

        <h1 className="text-6xl font-bold">
          Our Adventure Products
        </h1>

        <p className="text-gray-400 mt-6 text-xl max-w-3xl mx-auto">
          Premium adventure equipment engineered for safety,
          durability and unforgettable experiences.
        </p>

      </section>

      {/* Products */}

      <section className="max-w-7xl mx-auto px-8 pb-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-3xl p-8 hover:scale-105 duration-300 border border-slate-700 hover:border-orange-500"
            >

              <div className="h-48 rounded-2xl mb-6 overflow-hidden">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover"
  />
</div>

              <h2 className="text-3xl font-bold">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-4">
                {item.desc}
              </p>

              <button className="mt-8 bg-orange-500 px-6 py-3 rounded-xl hover:bg-orange-600">
                View Details
              </button>

            </div>

          ))}

        </div>

      </section>

    </div>
  );
}