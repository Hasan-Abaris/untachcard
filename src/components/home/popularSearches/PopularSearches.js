import React from 'react'

function PopularSearches() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-5xl uppercase font-semibold font-secondary text-center mb-16 text-gray-900 dark:text-white">
          Benefits of using Un taCH cards are
        </h2>

        {/* Flex Container */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Going Paperless",
            "Paper Business card printing cost cutting",
            "Be an environment-friendly company",
            "Contact less information sharing",
            "Make an Effective Impression",
            "Ability to update any details in real-time",
            "Extended information in contact profile",
            "Never Loose Contact Data Information",
          ].map((benefit, index) => (
            <a
              key={index}
              href="#"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full shadow-md hover:shadow-lg hover:bg-orange-100 dark:hover:bg-gray-700 transition-all duration-300 text-center text-sm font-medium"
            >
              {benefit}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularSearches
