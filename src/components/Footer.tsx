const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 md:px-14 py-6">
        <p className="text-xs text-gray-600 text-center leading-relaxed flex flex-wrap justify-center gap-x-1 gap-y-1">
          <span>© 2026 Atul Kathole. All rights reserved</span>

          <span className="hidden sm:inline mx-1">|</span>

          <span>
            Website by{" "}
            <span className="font-medium text-[#FFBF00]">
              Sanskar
            </span>{" "}
            in Pune, India.
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
