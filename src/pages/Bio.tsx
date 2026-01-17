import { Link } from "react-router-dom";

const Bio = () => {
  return (
    <div className="w-full bg-[#0e0f14] text-white">

      {/* ================= ABOUT HEADER ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-14 pt-24 pb-20">
        <h1 className="text-3xl md:text-4xl font-serif text-center mb-14">
          About Me
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 items-start">

          {/* PROFILE IMAGE */}
          <div className="max-w-xs mx-auto md:mx-0">
            <img
              src="/atulsir-bio.jpeg"
              alt="Dr. Atul B. Kathole"
              className="rounded-md w-full object-cover border border-white/20"
            />
          </div>

          {/* BIO CONTENT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-serif mb-2">
              Dr. Atul B. Kathole
            </h2>

            <p className="text-base md:text-lg text-gray-300 mb-6">
              Ph.D. (Computer Science & Engineering)
            </p>

            <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
              Dr. Atul B. Kathole is an accomplished academician and researcher
              with over <strong className="text-white">16.6 years of teaching experience</strong>.
              I am currently working as a Professor in the
              Department of <strong className="text-white">Computer Science & Engineering</strong> at
              <strong className="text-white"> School of Engineering, Ajeenkya D. Y. Patil University, Pune</strong>.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base">
              My research interests include <strong className="text-white">
              Internet of Things (IoT), Machine Learning, Network Security,
              Cloud Computing, Cyber Security, and Information Security</strong>.
              I have published extensively in reputed SCI and SCOPUS indexed
              journals and international conferences.
            </p>
          </div>
        </div>
      </section>

      {/* ================= QUALIFICATIONS ================= */}
      <section className="max-w-7xl mx-auto px-4 md:px-14 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          <div>
            <h3 className="text-xl md:text-2xl font-serif mb-6">
              Academic Qualifications
            </h3>

            <ul className="space-y-4 text-gray-300 list-disc list-inside text-sm md:text-base">
              <li>Ph.D. in Computer Science & Engineering – SGBAU</li>
              <li>M.E. in Computer Science & Engineering – Pune University</li>
              <li>MBA (Information Technology) – Mumbai University</li>
              <li>B.E. in Computer Science & Engineering – SGBAU</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-serif mb-6">
              Other Contributions
            </h3>

            <ul className="space-y-4 text-gray-300 list-disc list-inside text-sm md:text-base">
              <li>IEEE Journal Reviewer</li>
              <li>Reviewer for SCI & SCOPUS indexed journals</li>
              <li>Session Chair at International Conferences</li>
              <li>Expert lectures in IoT, Machine Learning & Cyber Security</li>
              <li>Coordinator for FDPs, workshops and STTP programs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section className="bg-[#1f1f1f] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">

          <Link
            to="/patents"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#FFBF00] transition"
          >
            <p className="text-3xl md:text-4xl font-bold">43+</p>
            <p className="text-sm text-gray-400 mt-1">Patents</p>
          </Link>

          <Link
            to="/copyrights"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#FFBF00] transition"
          >
            <p className="text-3xl md:text-4xl font-bold">26+</p>
            <p className="text-sm text-gray-400 mt-1">Copyrights</p>
          </Link>

          <Link
            to="/publications"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#FFBF00] transition"
          >
            <p className="text-3xl md:text-4xl font-bold">67+</p>
            <p className="text-sm text-gray-400 mt-1">Publications</p>
          </Link>

          <Link
            to="/experience"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-[#FFBF00] transition"
          >
            <p className="text-3xl md:text-4xl font-bold">45+</p>
            <p className="text-sm text-gray-400 mt-1">Expert Talks</p>
          </Link>

        </div>
      </section>

    </div>
  );
};

export default Bio;




// {/* LINKS */}
//             <div className="flex flex-wrap gap-6 mt-6">
//               <a
//                 href="https://scholar.google.com/citations?hl=en&user=5kZO4MoAAAAJ"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-sm font-medium text-[#FFBF00] hover:underline"
//               >
//                 Google Scholar
//               </a>

//               <a
//                 href="https://orcid.org/0000-0002-6162-8200"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-sm font-medium text-[#FFBF00] hover:underline"
//               >
//                 ORCID
//               </a>

//               <a
//                 href="https://www.scopus.com/authid/detail.uri?authorId=57202995656"
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-sm font-medium text-[#FFBF00] hover:underline"
//               >
//                 Scopus
//               </a>
//             </div>