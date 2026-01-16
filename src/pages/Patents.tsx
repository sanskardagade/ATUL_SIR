const Patents = () => {
  return (
    <div className="w-full bg-[#0e0f14] text-white">

      {/* ================= HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-14 pt-24 pb-16">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-6">
          Patents
        </h1>

        <p className="text-center text-gray-400 max-w-3xl mx-auto mb-14 text-sm md:text-base">
          International and Indian patents filed and granted in the areas of
          blockchain, security systems, healthcare and intelligent automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* ================= INTERNATIONAL PATENTS ================= */}
          <div className="bg-white/5 backdrop-blur rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-serif mb-6 text-[#FFBF00]">
              International Patents
            </h3>

            <ul className="space-y-5 list-disc list-inside text-gray-300 leading-relaxed text-sm md:text-base">
              <li>
                <strong>Patent Number:</strong> 2021102390 <br />
                <strong>Title:</strong> A Smart Device for Online Class <br />
                <strong>Status:</strong> Granted <br />
                <strong>Grant Date:</strong> 6th May 2021
              </li>

              <li>
                <strong>Application Number:</strong> PCT/IN2016/000128/693 <br />
                <strong>Title:</strong> Device Detection System <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Number:</strong> WO/2017/168430 <br />
                <strong>Publication Date:</strong> 05/10/2017
              </li>
            </ul>
          </div>

          {/* ================= INDIAN PATENTS ================= */}
          <div className="bg-white/5 backdrop-blur rounded-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-serif mb-6 text-[#FFBF00]">
              Indian Patents
            </h3>

            <ul className="space-y-5 list-disc list-inside text-gray-300 leading-relaxed text-sm md:text-base">

              {/* EXISTING PATENTS */}
              <li>
                <strong>Application Number:</strong> 4140/MUM/2015 <br />
                <strong>Title:</strong> Implementation of Secure Bank Locker
                System Using Secure Secret Sharing Scheme and FPGA <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> Nov 2015
              </li>

              <li>
                <strong>Application Number:</strong> 20211057017 <br />
                <strong>Title:</strong> Cattle Farming Automation System <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 17th Dec 2021
              </li>

              <li>
                <strong>Application Number:</strong> 20221064109 <br />
                <strong>Title:</strong> An Eco Tank <br />
                <strong>Status:</strong> Published <br />
                <strong>Filed Date:</strong> 09/12/2022
              </li>

              <li>
                <strong>Application Number:</strong> 20211058487 <br />
                <strong>Title:</strong> A Smart Sustainable Portable Cold Storage <br />
                <strong>Status:</strong> Granted <br />
                <strong>Grant Date:</strong> 6th Dec 2021
              </li>

              <li>
                <strong>Application Number:</strong> 20221004426 <br />
                <strong>Title:</strong> Medicine Intake Tracker and Healthcare Assistant <br />
                <strong>Status:</strong> Filed <br />
                <strong>Filed Date:</strong> 27th Jan 2022
              </li>

              <li>
                <strong>Application Number:</strong> 202212082429 <br />
                <strong>Title:</strong> Verifying the Authenticity of Products Based
                on QR Codes to Avoid Counterfeiting <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 17/06/2022
              </li>

              {/* ================= NEW PATENTS ================= */}
              <li>
                <strong>Application Number:</strong> 202521018482 <br />
                <strong>Title:</strong> MediSmart - Intelligent Medication Management & Health Monitoring <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 14/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521018521 <br />
                <strong>Title:</strong> Ecosun Solar Shine Automated Tracking Energy Management, Cleaning,
                and Monitoring System for Improved Energy Efficiency in Smart Cities <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 14/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521019141 <br />
                <strong>Title:</strong> Smart Agriculture Plant Health Monitoring Using IoT and Leaf Disease Detection Using Machine Learning <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 14/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521019485 <br />
                <strong>Title:</strong> Smart Glasses – Smart Projector and HUD <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 21/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521019490 <br />
                <strong>Title:</strong> Engine Control Based on Alcohol Detection <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 21/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521019502 <br />
                <strong>Title:</strong> IoT-Driven Smart Parking Solution <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 21/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521019962 <br />
                <strong>Title:</strong> Smart Agriculture: Early Tomato Leaf Disease Detection Using CNN-Based Deep Learning <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 21/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521019972 <br />
                <strong>Title:</strong> Wahan Mitra - Automatic Headlight Control and Vehicle Detection System for Enhanced Road Safety <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 21/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521020039 <br />
                <strong>Title:</strong> Intelligent EV Cycle with Integrated Sensors and Solar-Assisted Charging <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 21/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521020086 <br />
                <strong>Title:</strong> Smart Portable AC <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 21/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521021006 <br />
                <strong>Title:</strong> AI-Powered Smart Cleaning & Assistance Robo Car <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 21/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521021005 <br />
                <strong>Title:</strong> Smart Classroom using AI <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 21/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 202521021220 <br />
                <strong>Title:</strong> AI-Powered Virtual Camera-Assisted Tuberculosis Detection Using Chest X Ray Images <br />
                <strong>Status:</strong> Published <br />
                <strong>Publication Date:</strong> 21/03/2025
              </li>

              <li>
                <strong>Application Number:</strong> 2021105373 <br />
                <strong>Title:</strong> A device for child safety and security <br />
                <strong>Status:</strong> Granted <br />
                <strong>Publication Date:</strong> 18/11/2021
              </li>

              <li>
                <strong>Application Number:</strong> 202321053391 <br />
                <strong>Title:</strong> ROADSIDE UNIT (RSU) BASED EMERGENCY VEHICLE WARNING SYSTEM <br />
                <strong>Status:</strong> Granted <br />
                <strong>Publication Date:</strong> -
              </li>

              <li>
                <strong>Application Number:</strong> 202221064109 <br />
                <strong>Title:</strong> AN ECO TANK <br />
                <strong>Status:</strong> Granted <br />
                <strong>Publication Date:</strong> -
              </li>

            </ul>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Patents;
