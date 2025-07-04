import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 text-gray-800 dark:text-gray-300 border-t dark:border-slate-700">
      <div className="max-w-screen-2xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Name */}
          <h2 className="text-2xl font-bold text-pink-500 mb-4 md:mb-0">
            Arijit.dev
          </h2>

          {/* Social Icons */}
          <div className="flex space-x-4 text-xl">
            <a
              href="https://github.com/Arijit0307"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arijit-pal-591a1b23a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:arijitpal973@gmail.com"
              className="hover:text-pink-500"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>

        <hr className="my-6 border-gray-300 dark:border-slate-600" />

        <p className="text-center text-sm">
          © {new Date().getFullYear()} Arijit Pal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
