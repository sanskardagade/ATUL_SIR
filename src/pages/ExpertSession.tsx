
const expertSessions = [
  "NS2 & NS3 Workshop at Sinhgad College – June 2017.",
  "IoT Workshop at JDIET, Yavatmal – December 2018.",
  "Python Workshop at Sinhgad College, Pune – February 2019.",
  "IoT with Python Workshop at PDA College, Pune – March 2019.",
  "Machine Learning Workshop at JSPM College, Pune – May 2019.",
  "Python Workshop at PDA College – June 2019.",
  "Python Workshop at JCOE, Yavatmal – August 2019.",
  "IoT Workshop at PRMIT College, Amravati – October 2019.",
  "Python Workshop at Nutan College of Engineering – August 2019.",
  "IoT Workshop at SGU, Kolhapur – February 2020.",
  "IoT & Python Online Workshop for multiple colleges – Five months during 2020.",
  "Python Online Workshop at PICT – August 2021.",
  "IoT & Python Online Workshop at ZCOER – December 2021.",
  "IoT Online Workshop at ZCOER – September 2022.",
  "IoT Workshop at PCCOE – February 2023.",
];

const ExpertSession = () => {
  return (
    <div className="w-full bg-[#0e0f14] text-white">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-14 pt-24 pb-14">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-6">
          Expert Sessions
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          Expert talks, workshops, and hands-on training sessions conducted
          across reputed institutions on emerging technologies.
        </p>

        {/* ================= CONTENT ================= */}
        <div className="bg-white/5 backdrop-blur rounded-lg p-6 md:p-10">
          <ol className="space-y-4 list-decimal list-inside text-gray-300 leading-relaxed">
            {expertSessions.map((session, index) => (
              <li key={index} className="text-sm md:text-base">
                {session}
              </li>
            ))}
          </ol>
        </div>
      </section>

    </div>
  );
};

export default ExpertSession;
