import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Bio from "./pages/Bio";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Copyrights from "./pages/Copyrights";
import Publications from "./pages/Publications";
import Patents from "./pages/Patents";
import ResearchGrant from "./pages/ResearchGrant";
import Footer from "./components/Footer";




export default function App() {
  return (
    <BrowserRouter>
      {/* Global wrapper ONLY handles colors */}
      <div className="min-h-screen bg-white text-gray-900">
        <Navbar />

        {/* ❌ NO padding / width control here */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bio" element={<Bio />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/copyrights" element={<Copyrights />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/patents" element={<Patents />} />
            <Route path="/research-grant" element={<ResearchGrant />} />

          </Routes>
        </main>
        <Footer />
       
      </div>
    </BrowserRouter>
  );
}
