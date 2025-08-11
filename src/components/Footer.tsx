const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0F0F] text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Company Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="/icons/file.svg"
                  alt="Framerz Media"
                  className="w-28 h-28 object-contain"
                />
              </div>
              <p className="text-sm text-white">Mail: contact@framerzmedia.com</p>
              <p className="text-sm text-gray-400">
                Professional video editing services for creators and businesses.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-1">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition"
                  >
                    YouTube Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Short Form Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white transition"
                  >
                    Podcast Editing
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 pt-6 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
              <p className="text-xs text-gray-400">
                © {currentYear} Framerz Media. All rights reserved.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/framerz_media/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/tanmaybharai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.youtube.com/@Framerzmedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
