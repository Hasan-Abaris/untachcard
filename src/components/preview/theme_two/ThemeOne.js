"use client";
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ProfileCard() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-0 overflow-hidden">
        <div className="relative">
          <div className="absolute top-4 right-4 flex space-x-2 z-10">
            <button
              className="px-3 py-1 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100"
              disabled
            >
              <i className="fas fa-eye mr-1"></i> Views: 397
            </button>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-3 py-1 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100"
              >
                <i className="fa fa-language mr-1"></i> Language
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <a href="https://vcard.waptechy.com/languages/change/english" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                  <a href="https://vcard.waptechy.com/languages/change/hindi" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hindi</a>
                  <a href="https://vcard.waptechy.com/languages/change/italian" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Italian</a>
                  <a href="https://vcard.waptechy.com/languages/change/spanish" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Spanish</a>
                  <a href="https://vcard.waptechy.com/languages/change/french" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">French</a>
                  <a href="https://vcard.waptechy.com/languages/change/arabic" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Arabic</a>
                </div>
              )}
            </div>
          </div>
          <div
            className="px-4 pt-16 pb-4 bg-gray-800 bg-cover bg-center"
            style={{ backgroundImage: 'url(https://vcard.waptechy.com/assets/uploads/card-banner/1738819350-HE-wiesbaden.png)' }}
          >
            <div className="flex items-end">
              <div className="mr-3">
                <img
                  src="https://vcard.waptechy.com/assets/uploads/card-profile/1739144827-bobmarley1.jpeg"
                  alt="Ria"
                  className="rounded w-24 h-24 object-cover border-2 border-white"
                />
              </div>
              <div className="mb-4">
                <h4 className="text-xl font-bold text-white">Ria</h4>
                <p className="text-sm text-gray-300">CEO and Founder</p>
              </div>
            </div>
          </div>
        </div>
        <h6 className="px-4 py-5 text-gray-600 text-center">
          We are WAPTechy Advanced Full Stack Developers.
        </h6>
        <div className="py-4 px-4">
          <ul className="space-y-2">
            <li>
              <a href="mailto:waptechy@gmail.com" className="flex items-center p-2 rounded hover:bg-gray-50">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                  <i className="far fa-envelope text-gray-600"></i>
                </span>
                <h6 className="text-gray-700">waptechy@gmail.com</h6>
              </a>
            </li>
            <li>
              <a href="tel:+918888888888" className="flex items-center p-2 rounded hover:bg-gray-50">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                  <i className="fas fa-mobile-alt text-gray-600"></i>
                </span>
                <h6 className="text-gray-700">+918888888888</h6>
              </a>
            </li>
            <li>
              <a href="https://wa.me/918888888888" target="_blank" className="flex items-center p-2 rounded hover:bg-gray-50">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                  <i className="fab fa-whatsapp text-gray-600"></i>
                </span>
                <h6 className="text-gray-700">WP</h6>
              </a>
            </li>
            <li>
              <a href="https://goo.gl/maps/fey6iWQbYP6ozcHc7" target="_blank" className="flex items-center p-2 rounded hover:bg-gray-50">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                  <i className="fas fa-map-marker-alt text-gray-600"></i>
                </span>
                <h6 className="text-gray-700">Silicon Valley, California, USA</h6>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/" target="_blank" className="flex items-center p-2 rounded hover:bg-gray-50">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                  <i className="fab fa-facebook text-gray-600"></i>
                </span>
                <h6 className="text-gray-700">Facebook</h6>
              </a>
            </li>
          </ul>
        </div>
        <div className="py-4 px-4 flex justify-center space-x-2">
          <a
            id="download-file"
            download="Ria.vcf"
            href="blob:https://vcard.waptechy.com/be4dec32-b830-450d-a5b7-d2a0b54694ff"
            className="px-4 py-2 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100 flex-1 justify-center"
          >
            <i className="fas fa-download mr-2"></i> Add to Phone Book
          </a>
          <a
            href="#"
            className="px-4 py-2 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100 flex-1 justify-center"
            onClick={() => alert('Share modal would open here')}
          >
            <i className="fas fa-share-alt mr-2"></i> Share
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;