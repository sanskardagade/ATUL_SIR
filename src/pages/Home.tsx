const Home = () => {
  return (
    <div className="w-full bg-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[85vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/home-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-14 h-full flex flex-col items-center justify-center pt-16 md:pt-20 text-center text-white">
          <img
            src="/atulsir-bio.jpeg"
            alt="Dr. Atul B. Kathole"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white mb-6 object-cover"
          />

          <h1 className="text-3xl md:text-5xl font-serif mb-4">
            Hello, I’m Dr. Atul B. Kathole
          </h1>

          <p className="text-base md:text-xl max-w-3xl leading-relaxed mb-6">
            Associate Professor · Researcher · Mentor <br />
            Department of Computer Engineering <br />
            Dr. D. Y. Patil Institute of Technology, Pimpri, Pune
          </p>

          <a
            href="/contact"
            className="mt-4 inline-block bg-[#FFBF00] hover:bg-[#e6ac00] text-black px-8 py-3 text-sm font-medium rounded transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* ================= RESEARCH INTEREST ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-14 py-20">
        <h2 className="text-3xl font-serif text-center mb-14">
          Research Interests
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            "Internet of Things (IoT)",
            "Machine Learning",
            "Network Security",
            "Cloud Computing",
            "Cyber Security",
            "Information Security",
          ].map((item) => (
            <div key={item}>
              <p className="font-medium mb-2">{item}</p>
              <div className="w-full h-1 bg-gray-200 rounded">
                <div className="h-1 bg-[#FFBF00] w-3/4 rounded" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#1f1f1f] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <p className="text-3xl md:text-4xl font-bold">13+</p>
            <p className="text-sm text-gray-300 mt-1">Patents</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold">26+</p>
            <p className="text-sm text-gray-300 mt-1">Copyrights</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold">37+</p>
            <p className="text-sm text-gray-300 mt-1">Publications</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-bold">25+</p>
            <p className="text-sm text-gray-300 mt-1">Expert Talks</p>
          </div>
        </div>
      </section>

      {/* ================= RESEARCH CONTRIBUTION ================= */}
      <section
        className="relative bg-cover bg-center py-24"
        style={{ backgroundImage: "url('/research-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-14 text-white">
          <h2 className="text-3xl font-serif text-center mb-4">
            Research Contribution
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

            <div className="bg-white/10 backdrop-blur p-8 text-center rounded">
              <h3 className="text-xl font-serif mb-4">Patents</h3>
              <p className="text-sm text-gray-200">
                13 patents filed <br />
                5 patents granted <br />
                Focused on IoT, Security & Smart Systems
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 text-center rounded">
              <h3 className="text-xl font-serif mb-4">Copyrights</h3>
              <p className="text-sm text-gray-200">
                26 registered copyrights <br />
                Academic, Research & Software Works
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur p-8 text-center rounded">
              <h3 className="text-xl font-serif mb-4">
                Research Publications
              </h3>
              <p className="text-sm text-gray-200">
                37+ Publications <br />
                SCI & SCOPUS Indexed Journals
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
