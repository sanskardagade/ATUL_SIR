const Copyrights = () => {
  return (
    <div className="w-full bg-[#0e0f14] text-white">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-14 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-6">
          Copyrights
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14 text-sm md:text-base">
          Registered literary copyrights granted by the Government of India
          for original scholarly and technical contributions.
        </p>

        {/* ================= COPYRIGHT LIST ================= */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur rounded-lg p-6 md:p-8">

            <h3 className="text-xl md:text-2xl font-serif mb-6 text-[#FFBF00]">
              Copyrights Registered
            </h3>

            <ul className="space-y-5 list-disc list-inside text-gray-300 leading-relaxed text-sm md:text-base">
              <li>
                <strong>Diary Number:</strong> 11705/2015-CO/L <br />
                <strong>Category:</strong> Literary <br />
                <strong>Status:</strong> Granted
              </li>

              <li>
                <strong>Diary Number:</strong> 3723/2019-CO/L <br />
                <strong>Category:</strong> Literary <br />
                <strong>Status:</strong> Granted
              </li>

              <li>
                <strong>Diary Number:</strong> L-105567/2021 <br />
                <strong>Category:</strong> Literary <br />
                <strong>Status:</strong> Granted
              </li>

              <li>
                <strong>Diary Number:</strong> L-105430/2021 <br />
                <strong>Category:</strong> Literary <br />
                <strong>Status:</strong> Granted
              </li>

              <li>
                <strong>Diary Number:</strong> L-105552/2021 <br />
                <strong>Category:</strong> Literary <br />
                <strong>Status:</strong> Granted
              </li>
            </ul>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Copyrights;


