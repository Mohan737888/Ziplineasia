function About() {
  return (
    <div className="bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="pt-36 pb-20 text-center">
        <h1 className="text-6xl font-bold">
          Meet the Founder
        </h1>

        <p className="text-orange-500 text-2xl mt-5 font-semibold">
          Major Satnaam Singh (Retd.)
        </p>

        <p className="text-gray-400 mt-4 text-lg">
          Founder & Chief Adventure Strategist
        </p>
      </section>

      {/* Founder Section */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center px-8 py-16">

        <div className="w-full h-[500px] bg-slate-800 rounded-3xl flex items-center justify-center">
          <p className="text-gray-400 text-xl">
            Founder Image Here
          </p>
        </div>

        <div>

          <h2 className="text-4xl font-bold mb-8">
            A Lifetime Dedicated to Adventure
          </h2>

          <p className="text-gray-300 leading-8 text-lg">
            Major Satnaam Singh (Retd.) is a distinguished Ex-Indian Army
            Officer from the Cavalry and a war-wounded veteran with more than
            30 years of experience in adventure tourism, outdoor leadership,
            and expedition management.
          </p>

          <p className="text-gray-300 leading-8 text-lg mt-6">
            His military discipline, combined with decades of experience in
            mountaineering and adventure sports, laid the foundation of
            ZIPLINE ASIA—where engineering excellence, innovation, and
            international safety standards come together.
          </p>

        </div>

      </section>

      {/* Achievements */}
      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold text-center mb-14">
          Himalayan Expeditions
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {[
            "Mt. Kedar Dome",
            "Mt. Satopanth",
            "Mt. Nun Kun",
            "Mt. Trishuli",
            "Mt. Chombu"
          ].map((item) => (
            <div
              key={item}
              className="bg-slate-900 rounded-2xl p-6 text-center border border-slate-700 hover:border-orange-500 transition"
            >
              <h3 className="font-bold text-xl">{item}</h3>
            </div>
          ))}

        </div>

      </section>

      {/* Company Journey */}
      <section className="max-w-6xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-bold mb-10">
          The Journey
        </h2>

        <p className="text-gray-300 leading-9 text-lg">
          In 1994, Major Satnaam Singh founded Travel Brace Pvt. Ltd.,
          delivering premium Domestic Holidays, International Tours,
          Adventure Travel, Luxury Holidays, MICE, Educational Tours and
          Experiential Travel.

          <br /><br />

          Inspired by the growing demand for professionally designed outdoor
          recreation, he later established ZIPLINE ASIA to build world-class
          adventure parks, zip lines, rope courses, climbing walls and
          complete outdoor recreation facilities across India.
        </p>

      </section>

      {/* Leadership Philosophy */}
      <section className="bg-orange-500 py-24">

        <div className="max-w-5xl mx-auto text-center px-8">

          <h2 className="text-5xl font-bold text-white">
            Leadership Philosophy
          </h2>

          <blockquote className="text-2xl italic text-white mt-10 leading-10">
            "Adventure is not merely about conquering mountains or crossing
            rivers. It is about discovering confidence, building character,
            embracing challenges, and creating experiences that stay with us
            for a lifetime."
          </blockquote>

          <p className="mt-10 text-xl font-semibold text-white">
            — Major Satnaam Singh (Retd.)
          </p>

        </div>

      </section>

    </div>
  );
}

export default About;