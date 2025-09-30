
import React from 'react'

const ContactForm = () => {
    return (
        <div className="w-full py-12 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 uppercase mb-2">KEEP IN TOUCH</h2>
                <div className="w-16 h-0.5 bg-gray-400 mx-auto mb-3"></div>
                <p className="text-gray-500 mb-10">for any query Contact us</p>


                <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    <div className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name*"
                            className="w-full p-3 border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="E-Mail*"
                            className="w-full p-3 border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 border border-gray-300 bg-gray-100 focus:ring-2 focus:ring-gray-400 focus:outline-none"
                        />
                    </div>


                    <textarea
                        placeholder="Tell us about your project.*"
                        className="w-full p-3 border border-gray-300 bg-gray-100 h-40 md:h-full focus:ring-2 focus:ring-gray-400 focus:outline-none"
                    ></textarea>


                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full py-3 bg-gray-800 text-white font-medium uppercase tracking-wide hover:bg-gray-700 transition"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm