import React from "react";

function Banner() {
  return (
    <div
      className="relative h-[400px] bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://image.wedmegood.com/resized/1280X/images/wedsta/backgoundImage/family_makeup_banner.jpg')",
      }}
    >
      {/* Dark overlay + center content */}
      <div className="flex flex-col items-center justify-center h-full text-white text-center bg-black/40 px-4">
        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold leading-snug py-6">
          <span>Wedsta: Family Makeup service by </span>
          <span className="text-pink-300">Wedding Spot</span>
        </h1>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-3xl">
          {/* Benefit 1 */}
          <div className="flex items-center justify-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://image.wedmegood.com/resized/30X/images/wedsta/benefits/noun_beautician_3x.png"
              alt="Trained Artists"
            />
            <span className="text-sm md:text-base font-medium">
              Trained Artists
            </span>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-center justify-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://image.wedmegood.com/resized/30X/images/wedsta/benefits/noun_lipsticks_3x.png"
              alt="Premium Products"
            />
            <span className="text-sm md:text-base font-medium">
              Premium Products
            </span>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-center justify-center">
            <img
              className="w-8 h-8 mr-2"
              src="https://image.wedmegood.com/resized/30X/images/wedsta/benefits/noun_Home_3x.png"
              alt="At Home Service"
            />
            <span className="text-sm md:text-base font-medium">
              At Home Service
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
