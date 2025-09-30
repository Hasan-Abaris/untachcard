"use client";

import React from "react";

function AboutUs() {
  return (
    <div className="AboutUs container mx-auto my-12 px-4 mt-20">
      {/* Heading */}
      <h3 className="text-3xl text-primary text-center mt-10 font-bold">About Us</h3>

      {/* Description */}
      <div className="mt-5 text-gray-700 text-base">
        India&apos;s favourite wedding planning website & app with over 1.5 million monthly dedicated users. ​WedMeGood is​ a ​swanky alternative to the outdated wedding planning process. A one-stop-shop for all things weddings, you can find inspiration​, ​ideas ​and vendors within​ your​ budget​. WedMeGood has been trusted by over 2​​ million brides & grooms​ all over the world​ to plan their big day.​ So sit back, log on to WedMeGood, and ​plan the wedding of your dreams​!
      </div>

      {/* Make Planning Decisions */}
      <h4 className="mt-6 text-xl font-semibold">Make Planning Decisions</h4>

      {/* Vendors */}
      <div className="mt-4">
        <a href="/vendors/" className="text-lg text-pink-600 font-semibold">Vendors</a>
        <p className="mt-2 text-gray-700">
          From photographers to wedding priests, WedMeGood has 80,000+ active vendors for you to choose from. Browse their portfolio, prices, genuine client reviews &amp; much more to do your research and book just about any wedding vendor you might require.
        </p>
      </div>

      {/* WMG Bridal Gallery / Shop */}
      <div className="mt-4">
        <a href="/shop/bridal-wear-home" className="text-lg text-pink-600 font-semibold">Bridal Gallery / Shop</a>
        <p className="mt-2 text-gray-700">
          The WMG Bridal Gallery is your one-stop wedding shop. Choose from 2000+ outfits and chat with the designer&apos;s team directly to find the outfit of your dreams. Kick-start your wedding shopping here from the comfort of your home!
        </p>
      </div>

      {/* Genie */}
      <div className="mt-4">
        <a href="/genie" className="text-lg text-pink-600 font-semibold">Genie</a>
        <p className="mt-2 text-gray-700">
          Genie services can help you find the right vendor to fit your budget &amp; style! Our Genie expert saves you the time &amp; hassle of browsing through hundreds of profiles by suggesting only the most relevant vendors for your specific requirements.
        </p>
      </div>

      {/* WedMeGood Mynt */}
      <div className="mt-4">
        <a href="/mynt" className="text-lg text-pink-600 font-semibold">Wedding Spot</a>
        <p className="mt-2 text-gray-700">
          An exclusive loyalty program by WedMeGood for our brides-to-be and grooms-to-be, this allows access to special offers and benefits from 100+ premium brands across various categories like bridal wear, travel, jewellery, beauty &amp; more!
        </p>
      </div>

      {/* Inspiration Section */}
      <h4 className="mt-6 text-xl font-semibold">
        Still early stages in your journey? Get inspired and discover your own wedding style
      </h4>

      {/* Photos */}
      <div className="mt-4">
        <a href="/photos" className="text-lg text-pink-600 font-semibold">Photos</a>
        <p className="mt-2 text-gray-700">
          With over 4 million photos, we just enough to have your wedding mood board in place! Right from trending bridal lehenga designs to fascinating decor details and stunning pre-wedding shoots, WMG&apos;s Photo Gallery serves you a collection of the most dreamy wedding photos that perfectly sum up &apos;All Things Weddings&apos;. <br /> P.S- Don&apos;t blame us if you&apos;re spoilt for choices
        </p>
      </div>

      {/* Real Weddings */}
      <div className="mt-4">
        <a href="/real_wedding" className="text-lg text-pink-600 font-semibold">Real Weddings</a>
        <p className="mt-2 text-gray-700">
          Every couple has a tale to tell. Whether it is a wedding thriller or a magical fairytale, we have immortalised tons of real couples&apos; stories on our Real Weddings section. With over 1,000 stories to cherish and bonus inspiration for us!
        </p>
      </div>

      {/* Blog */}
      <div className="mt-4 mb-8">
        <a href="/blog" className="text-lg text-pink-600 font-semibold">Blog</a>
        <p className="mt-2 text-gray-700">
          That would be your chock-a-block for all your wedding &quot;wows&quot;! <br />5000+ blogs dedicated to a mixed-platter of the latest wedding trends &amp; ideas to serve you with just the right amount of wedding inspiration you need to kickstart your wedding planning.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
