import { useState } from "react";

const journals = [
  "IoT Approach for Ensuring Safety in Smart Cities for Energy Saving – Journal of Electrical Systems, 2024.",
  "IoT-Based Smart Agriculture for Onion Plant Disease Management – IJISAE, 2024.",
  "Federated Learning Aided Breast Cancer Detection – Biomedical Signal Processing and Control (Elsevier), 2023.",
  "Improved Secure Encryption with Energy Optimization – Energies (MDPI), 2023.",
  "Energy-Aware UAV Based on Blockchain Model – Energies (MDPI), 2022.",
  "Blockchain-Based Approach to Ensuring the Security of Electronic Data – IJISAE, 2024.",
  "Secure Hybrid Approach for Sharing Data Securely in VANET – Springer ICCSA, 2022.",
  "IoT-Enabled Pest Identification using Deep Learning – Cybernetics and Systems, 2022.",
  "Security Enhancement of Forensic Evidences using Blockchain – ICICV 2021.",
  "Smart Indoor Navigation & Queue-less Billing using AI – IEEE AIMV 2021.",
  "Data Accountability in Remote Healthcare using BaaS – LNNS, 2021.",
  "Enhancing Security of Electronic Patient Records – I2CT 2018.",
  "Verifiable Image Secret Sharing with Cheater Identification – ICICCT 2018.",
  "Ethical Hacking: The Need for Cyber Security – IEEE ICPCSI 2017.",
  "Efficient Image Secret Sharing using Parallel Processing – Springer, 2017.",
  "A Parallel Algorithm for Object Recognition – IEEE IACC 2010.",
];

const books = [
  "Operation Research Techniques – JP Publication, 2011.",
  "Numerical Methods and OR Techniques – Piyush Publication, 2012.",
  "Operation Research (ISBN: 9783659171147) – LAP Lambert Academic Publishing, Germany, 2012.",
  "Performance Analysis of AODV, DSR & DSDV Routing Protocol in VANET – LAP Lambert Academic Publishing, Germany, 2018.",
];

const Publications = () => {
  const [activeTab, setActiveTab] = useState<"journals" | "books">("journals");

  return (
    <div className="w-full bg-[#0e0f14] text-white">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-14 pt-24 pb-14">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-6">
          Publications
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          Peer-reviewed journals, international conferences, and authored books
          published with SCI, SCOPUS, IEEE, Springer, Elsevier and reputed publishers.
        </p>

        {/* ================= TABS ================= */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <button
            onClick={() => setActiveTab("journals")}
            className={`px-6 py-2 text-sm rounded border transition
              ${
                activeTab === "journals"
                  ? "bg-[#FFBF00] border-[#FFBF00] text-black"
                  : "border-white/30 text-gray-300 hover:border-[#FFBF00]"
              }`}
          >
            Journals
          </button>

          <button
            onClick={() => setActiveTab("books")}
            className={`px-6 py-2 text-sm rounded border transition
              ${
                activeTab === "books"
                  ? "bg-[#FFBF00] border-[#FFBF00] text-black"
                  : "border-white/30 text-gray-300 hover:border-[#FFBF00]"
              }`}
          >
            Books
          </button>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="bg-white/5 backdrop-blur rounded-lg p-6 md:p-10">
          <ol className="space-y-4 list-decimal list-inside text-gray-300 leading-relaxed">
            {(activeTab === "journals" ? journals : books).map((item, index) => (
              <li key={index} className="text-sm md:text-base">
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

    </div>
  );
};

export default Publications;
