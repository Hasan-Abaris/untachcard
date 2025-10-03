"use client"
import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ThemeOne = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
            <div className="card-block">
                <div className="flex justify-end mb-4">
                    <div className="relative">
                        <button 
                            className="mr-2 px-3 py-1 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100"
                            disabled
                        >
                            <i className="fas fa-eye mr-1"></i> Views: 396
                        </button>
                        <div className="relative inline-block">
                            <button 
                                onClick={toggleDropdown}
                                className="px-3 py-1 text-sm border border-gray-600 rounded flex items-center hover:bg-gray-100"
                            >
                                <i className="fa fa-language mr-1"></i> Language
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg dropdown-menu">
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
                </div>

                <div className="flex justify-center mb-4">
                    <img 
                        src="https://vcard.waptechy.com/assets/uploads/card-profile/1739144827-bobmarley1.jpeg" 
                        className="rounded-full w-24 h-24 object-cover"
                        alt="Ria"
                    />
                </div>

                <h5 className="text-center text-xl font-semibold">Ria</h5>
                <h6 className="text-center text-gray-600">CEO and Founder</h6>
                <hr className="my-4" />
                <h6 className="text-center text-gray-600">We are WAPTechy Advanced Full Stack Developers.</h6>
                <hr className="my-4" />

                <ul className="space-y-2">
                    <li>
                        <a href="mailto:waptechy@gmail.com" className="flex items-center p-2 rounded hover:bg-gray-50">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                                <i className="far fa-envelope"></i>
                            </span>
                            <h6 className="text-gray-700">waptechy@gmail.com</h6>
                        </a>
                    </li>
                    <li>
                        <a href="tel:+918888888888" className="flex items-center p-2 rounded hover:bg-gray-50">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                                <i className="fas fa-mobile-alt"></i>
                            </span>
                            <h6 className="text-gray-700">+918888888888</h6>
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/918888888888" target="_blank" className="flex items-center p-2 rounded hover:bg-gray-50">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                                <i className="fab fa-whatsapp"></i>
                            </span>
                            <h6 className="text-gray-700">WP</h6>
                        </a>
                    </li>
                    <li>
                        <a href="https://goo.gl/maps/fey6iWQbYP6ozcHc7" target="_blank" className="flex items-center p-2 rounded hover:bg-gray-50">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                                <i className="fas fa-map-marker-alt"></i>
                            </span>
                            <h6 className="text-gray-700">Silicon Valley, California, USA</h6>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/" target="_blank" className="flex items-center p-2 rounded hover:bg-gray-50">
                            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                                <i className="fab fa-facebook"></i>
                            </span>
                            <h6 className="text-gray-700">Facebook</h6>
                        </a>
                    </li>
                </ul>

                <hr className="my-4" />

                <div className="flex justify-center space-x-2">
                    <a 
                        id="download-file" 
                        download="Ria.vcf" 
                        href="blob:https://vcard.waptechy.com/91c9d6c4-b997-4861-ac52-9c51cd17ca4f" 
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
};

export default ThemeOne;