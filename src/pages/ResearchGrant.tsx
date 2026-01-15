const ResearchGrant = () => {
  return (
    <div className="w-full bg-[#0e0f14] text-white">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-14 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-6">
          Research Grants
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14 text-sm md:text-base">
          Sponsored research projects funded by reputed academic and
          government agencies for innovative and impactful research.
        </p>

        {/* ================= GRANTS ================= */}
        <div className="max-w-4xl mx-auto space-y-10">

          {/* GRANT 1 */}
          <div className="bg-white/5 backdrop-blur rounded-lg p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-serif text-[#FFBF00] mb-4">
              Research Grant – BCUD, Pune
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <strong>Fund Received:</strong> INR 3,00,000 /-
              </li>
              <li>
                <strong>Title:</strong> Development of Parallel Algorithm for
                Image Enhancements and Segmentation
              </li>
              <li>
                <strong>Year:</strong> 2007 – 2008 and 2008 – 2009
              </li>
              <li>
                <strong>Grant Agency:</strong> BCUD, Pune
              </li>
            </ul>
          </div>

          {/* GRANT 2 */}
          <div className="bg-white/5 backdrop-blur rounded-lg p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-serif text-[#FFBF00] mb-4">
              Research Grant – Jidhyasa Fellowship
            </h3>

            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li>
                <strong>Fund Received:</strong> INR 2,00,000 /-
              </li>
              <li>
                <strong>Title:</strong> A Smart Assistance to Mango Cultivator:
                Intelligent Stick to Predict Mango Ripening Stages for Plucking
              </li>
              <li>
                <strong>Year:</strong> 2022 – 2023
              </li>
              <li>
                <strong>Grant Agency:</strong> Jidhyasa Fellowship
              </li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ResearchGrant;
