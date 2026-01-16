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

  /* ================= NEW JOURNAL PUBLICATIONS ================= */

  "A Novel Chatbot Driven by Sentiment Analysis Using a Capsule Network and BiLSTM for Online User Feedback on Consumer Electronics – IEEE Transactions on Consumer Electronics, 2025.",
  "Designing an Optimal Task Scheduling and VM Placement in the Cloud Environment with Multi-Objective Constraints Using Hybrid Lemurs and Gannet Optimization Algorithm – 2025.",
  "Classification of DNA–Protein Interactions Based on Protein Structure and Sequence Using Convolution Neural Networks and Encoding Techniques – 2025.",
  "Improving Electronic Health Record Security with Blockchain: A Comprehensive Analysis of Current Innovations and Future Directions – 2025.",
  "Extended Reality and Security – 2025.",
  "Automatic Facial Makeup Detection for Device Security Using Machine Learning – Lecture Notes in Networks and Systems, 2025.",
  "Optimization-Based Resource Scheduling Techniques in Cloud Computing Environment: A Review of Scientific Workflows and Future Directions – 2025.",
  "Ripening Stage Detection of Mangoes by Size and Maturity Using Hybrid (1D–2D) Convolution-Based Adaptive DenseNet with Attention Mechanism – 2025.",
  "Novel Load Balancing Mechanism for Cloud Networks Using Dilated and Attention-Based Federated Learning with Coati Optimization – Scientific Reports, 2025.",
  "An Intelligent Model of Heuristic Improvement and Transformer-Based Adaptive Deep Ensemble Networks with ASPP for Detecting Tuberculosis Using Chest X-Ray Images – 2025.",
  "Advancing Electronic Medical Data Protection Through Blockchain Innovation – 2025.",
  "An Innovative Onion Disease Classification Framework Using Smart IoT Assisted Multi-Scale Attention-Based ResNeXt with SPP – 2025.",
  "Multi-Order Hypergraph Convolutional Network Framework for Intracranial Brain Hemorrhage Detection in Wearable Healthcare Systems – 2025.",
  "Smart Contract Vulnerability Detection Using Finite Element Interpolated Neural Networks for Enhanced Blockchain Security – 2025.",
  "Species Identification for Indian Seafood Markets Using Machine Learning – 2025.",
  "Development of Student Intent-Based Educational Chatbot System Using Adaptive and Attentive DTCN – 2025.",
  "Groundnut Plant Disease Classification Using Heuristic-Aided Multilevel K-Means and Attention-Based Hybrid Dilated Residual Network – 2025.",
  "Efficient Fuzzy Ranking with Ensemble Machine Learning Network for Attack Detection in VANET – 2025.",
  "Breaking the Silence: Innovation in Wake Word Activation – 2024.",
  "Sentiment Analysis-Based Automatic Stress and Emotion Recognition Using EEG Signals – 2024.",
  "Challenges and Key Issues in IoT Privacy and Security – 2024.",
  "IoT-Based Smart Agriculture for Onion Plant Disease Management: A Comprehensive Approach – 2024.",
  "Abortion Detection and Monitoring Using Biometric and Artificial Intelligence – 2024.",
  "IoT-Enabled Pest Identification and Classification with Meta-Heuristic-Based Deep Learning Framework – 2024.",
  "Energy-Aware Optimal Virtual Machine Scheduling in Cloud Environment – 2024.",
  "Electronic Health Records Protection Strategy Using Blockchain Approach – 2024.",
  "A Novel Approach to IoT Security for Intrusion Detection Using Ensemble Network – 2024.",
  "Improved Optimization Algorithm for Resource Management in Cloud Applications – 2024.",
  "Enhanced Security Mechanism in Vehicular Networks Using Ensemble Machine Learning – 2024.",
  "Solar Energy Prediction in IoT Systems Using Optimized Spatio-Temporal Graph Convolutional Neural Network – 2024.",
  "A Comprehensive Framework for Facial Emotion Detection Using Deep Learning – 2024.",
  "Secure Federated Cloud Storage Protection Strategy Using Hybrid Heuristic Attribute-Based Encryption – IEEE Access, 2024.",
  "Integrated MLOps and EEG Techniques for Enhanced Crime Detection and Prevention – 2024.",
  "License Plate Recognition for Detecting Stolen Vehicles Using Deep Learning – 2023.",
  "Image Editing Using Generative Adversarial Networks – 2023.",
  "Pest Identification and Classification Using IoT-Enabled Techniques – 2023.",
  "Leveraging Blockchain in Sharing and Managing Health Record Credentials – 2023.",
  "Intelligent Information System for COVID-19 Detection Using AI – 2023.",
  "Identify and Classify Pests in the Agricultural Sector Using Metaheuristic Deep Learning Approach – 2023.",
  "Security Issues in Generative Adversarial Networks – 2023.",
  "Automated Framework for Detecting Unknown Activity in Vehicular Ad Hoc Networks – 2023.",
  "Improved Secure Encryption with Energy Optimization Using IoT in Wireless Sensor Networks – Energies, 2023.",
  "Federated Learning Aided Breast Cancer Detection with Heuristic-Based Deep Learning Framework – 2023.",
  "Energy-Aware UAV Based on Blockchain Model Using IoE in 6G Networks – 2022.",
  "Image Classification Using Deep Learning Algorithms for Cotton Crop Disease Detection – 2022.",
  "Robust Authentication System with Privacy Preservation of Biometrics – 2022.",
  "Machine Learning and Its Classification Techniques – 2019.",
  "Study and Implementation of Routing Protocols Using Security Methods – 2018.",
  "Optimization of Vehicular Ad Hoc Network Using Cloud Computing – 2018.",
  "Providing Security in Vehicular Ad Hoc Network Using Cloud Computing and Secure Key Method – 2018.",
];

const books = [
  "Operation Research Techniques – JP Publication, 2011.",
  "Numerical Methods and OR Techniques – Piyush Publication, 2012.",
  "Operation Research (ISBN: 9783659171147) – LAP Lambert Academic Publishing, Germany, 2012.",
  "Performance Analysis of AODV, DSR & DSDV Routing Protocol in VANET – LAP Lambert Academic Publishing, Germany, 2018.",
];

const Publications = () => {
  const [activeTab, setActiveTab] = useState("journals");

  return (
    <div className="w-full bg-[#0e0f14] text-white">

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
