import React from "react";

const AppDownloadBanner = () => {
  return (
    <section className="bg-gradient-to-r from-[#ffeff9] to-[#ffeff9] py-10 px-6 sm:px-12 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            Download Our App
          </h2>
          <p className="text-gray-600 text-lg">
            Book appointments, check reports & access care anytime, anywhere.
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-row gap-4">
          {/* Google Play Button */}
          <a
            href="https://play.google.com/store/apps" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white px-4 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Download on Google Play"
              className="h-10"
            />
          </a>

          {/* Apple Store Button */}
          <a
            href="https://www.apple.com/app-store/" // Replace with actual link
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-black text-white px-4 py-3 rounded-lg shadow-md hover:bg-gray-800 transition"
          >
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="Download on the App Store"
              className="h-10"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadBanner;
