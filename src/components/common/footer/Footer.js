import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Start Planning */}
        <div>
          <h4 className="text-lg font-semibold text-pink-600 mb-4">
            Start Planning
          </h4>
          <ul className="space-y-2">
            {[
              "Search By Vendor",
              "Search By City",
              "Download Our App",
              "Top Rated Vendors",
              "Destination Wedding",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-pink-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Wedding Ideas */}
        <div>
          <h4 className="text-lg font-semibold text-pink-600 mb-4">
            Wedding Ideas
          </h4>
          <ul className="space-y-2">
            {[
              "Wedding Blog",
              "Wedding Inspiration Gallery",
              "Real Wedding",
              "Submit Wedding",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-pink-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Photo Gallery */}
        <div>
          <h4 className="text-lg font-semibold text-pink-600 mb-4">
            Photo Gallery
          </h4>
          <ul className="space-y-2">
            {[
              "Bridal Wear",
              "Wedding Jewellery",
              "Bridal Makeup & Hair",
              "Wedding Decor",
              "Wedding Photography",
              "Groom Wear",
              "Invitations & Favors",
              "Wedding Accessories",
              "Mehendi Designs",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-pink-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Home */}
        <div>
          <h4 className="text-lg font-semibold text-pink-600 mb-4">Home</h4>
          <ul className="space-y-2">
            {[
              { label: "About", href: "/about-us" },
              { label: "Careers", href: "#careers" },
              { label: "Contact Us", href: "/contact" }, // <-- scrolls to Contact section
              { label: "Site Map", href: "#sitemap" },
              { label: "Terms & Conditions", href: "#terms" },
              { label: "Privacy Policy", href: "#privacy" },
              { label: "Cancellation Policy", href: "#cancellation" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.href}
                  className="hover:text-pink-600 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Wedding Invitation Maker */}
        <div>
          <h4 className="text-lg font-semibold text-pink-600 mb-4">
            Wedding Invitation Maker
          </h4>
          <ul className="space-y-2">
            {[
              "Wedding Card Designs",
              "Save the Date Templates",
              "Invitation Video Templates",
            ].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="hover:text-pink-600 transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Wedding Spot Designed By{" "}
        <a href="https://www.abarissoftech.com/" target="blank">
          Abaris Softech
        </a>
      </div>
    </footer>
  );
};

export default Footer;
