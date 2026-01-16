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
            Professor · Researcher · Mentor <br />
            Department of Computer Engineering <br />
            School of Engineering, Ajeenkya D. Y. Patil University, Pune
          </p>

          {/* ================= ACADEMIC LINKS ================= */}
          <div className="flex flex-wrap gap-6 mt-6 justify-center">
            <a
              href="https://scholar.google.com/citations?hl=en&user=5kZO4MoAAAAJ"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[#FFBF00] hover:underline"
            >
              Google Scholar
            </a>

            <a
              href="https://orcid.org/0000-0002-6162-8200"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[#FFBF00] hover:underline"
            >
              ORCID
            </a>

            <a
              href="https://www.scopus.com/authid/detail.uri?authorId=57202995656"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-[#FFBF00] hover:underline"
            >
              Scopus
            </a>
          </div>
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

            <a href="/patents" className="bg-white/10 backdrop-blur p-8 text-center rounded hover:bg-white/20 transition">
              <h3 className="text-xl font-serif mb-4">Patents</h3>
              <p className="text-sm text-gray-200">
                43+ patents Published <br />
                8 patents granted <br />
                Focused on IoT, Security & Smart Systems
              </p>
            </a>

            <a href="/copyrights" className="bg-white/10 backdrop-blur p-8 text-center rounded hover:bg-white/20 transition">
              <h3 className="text-xl font-serif mb-4">Copyrights</h3>
              <p className="text-sm text-gray-200">
                26+ copyrights published<br />
                Academic, Research & Software Works
              </p>
            </a>

            <a href="/publications" className="bg-white/10 backdrop-blur p-8 text-center rounded hover:bg-white/20 transition">
              <h3 className="text-xl font-serif mb-4">
                Research Publications
              </h3>
              <p className="text-sm text-gray-200">
                67+ Publications <br />
                SCI & SCOPUS Indexed Journals
              </p>
            </a>

            <a href="/experience" className="bg-white/10 backdrop-blur p-8 text-center rounded hover:bg-white/20 transition">
              <h3 className="text-xl font-serif mb-4">Expert Talks</h3>
              <p className="text-sm text-gray-200">
                45+ Expert Talks <br />
                FDPs, Workshops & Keynote Sessions <br />
                Academia & Industry Platforms
              </p>
            </a>

            <a href="/research-grant" className="bg-white/10 backdrop-blur p-8 text-center rounded hover:bg-white/20 transition">
              <h3 className="text-xl font-serif mb-4">Research Funding</h3>
              <p className="text-sm text-gray-200">
                Funded Research Projects <br />
                Government & Industry Sponsored <br />
                National & International Grants
              </p>
            </a>

            <a
              href="https://orcid.org/0000-0002-6162-8200"
              target="_blank"
              rel="noreferrer"
              className="bg-white/10 backdrop-blur p-8 text-center rounded hover:bg-white/20 transition"
            >
              <h3 className="text-xl font-serif mb-4">Editor & Reviewer</h3>
              <p className="text-sm text-gray-200">
                IEEE Journals <br />
                Taylor & Francis Journals <br />
                Springer & Elsevier Journals
              </p>
            </a>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
