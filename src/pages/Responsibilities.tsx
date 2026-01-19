const Responsibilities = () => {
  return (
    <div className="w-full bg-[#0e0f14] text-white">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-14 pt-24 pb-16">

        <h1 className="text-3xl md:text-4xl font-serif text-center mb-6">
          Administrative & Academic Responsibilities
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          Key academic leadership, accreditation coordination, research development,
          and institutional responsibilities undertaken at department and institute levels.
        </p>

        {/* ================= LOGOS ================= */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          <img
            src="/nba.png"
            alt="NBA"
            className="h-16 object-contain grayscale hover:grayscale-0 transition"
          />
          <img
            src="/naac.png"
            alt="NAAC"
            className="h-16 object-contain grayscale hover:grayscale-0 transition"
          />
          <img
            src="/nirf.png"
            alt="NIRF"
            className="h-16 object-contain grayscale hover:grayscale-0 transition"
          />
          <img
            src="/rnd.png"
            alt="R&D"
            className="h-16 object-contain grayscale hover:grayscale-0 transition"
          />
        </div>

        {/* ================= CONTENT ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* ================= DEPARTMENT LEVEL ================= */}
          <div className="bg-white/5 backdrop-blur rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-serif mb-6 text-[#FFBF00]">
              Department Level
            </h3>

            <ul className="space-y-4 list-disc list-inside text-gray-300 text-sm md:text-base leading-relaxed">
              <li>NBA Coordinator (Department Level)</li>
              <li>NBA Criteria 3 & 4 Coordinator</li>
              <li>NAAC Criteria 3 & 4 Coordinator</li>
              <li>NIRF Coordinator</li>
              <li>IoT Laboratory In-Charge</li>
              <li>Research & Development (R&D) Coordinator</li>
              <li>PBAS / API Coordinator</li>
            </ul>
          </div>

          {/* ================= INSTITUTE LEVEL ================= */}
          <div className="bg-white/5 backdrop-blur rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-serif mb-6 text-[#FFBF00]">
              Institute Level
            </h3>

            <ul className="space-y-4 list-disc list-inside text-gray-300 text-sm md:text-base leading-relaxed">
              <li>Dean & Coordinator – Research & Development (R&D)</li>
              <li>Ph.D. Coordinator</li>
              <li>NIRF Coordinator</li>
              <li>Industry–Institute Interaction Coordinator</li>
              <li>International Conference Coordinator</li>
              <li>R&D Technical Event Coordinator</li>
              <li>PBAS / API Coordinator</li>
            </ul>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Responsibilities;
