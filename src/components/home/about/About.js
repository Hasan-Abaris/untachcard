export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-white px-6 py-12"
    >
      <div className="max-w-7xl w-full">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-6xl font-bold mb-12">
          Your Brand is your Identity and we know how valuable it is{" "}
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <h1 className="mt-16 mb-16 text-[22px] leading-[30px]">
              First impression is the Last Impression, and your business card is
              usually one of the first thing you introduce you to your client.
              Fast and easy way to share your info, it’s a new ‘’Generation of
              Business Cards
            </h1>
            <h2>Its just One Touch, No Apps</h2>
            <h1 className="mt-16 mb-16 text-[22px] leading-[30px]">
              Traditional business cards are printed in bulk, go out of date
              quickly and are often just thrown away. Un Tach enables you to
              update your details at any time and re-use the same card over and
              over again!
            </h1>
          </div>

          {/* Right Image */}
          <div className="">
            <img
              src="/assets/banner/about1.jpg"
              alt="Phone Mockup"
              className=""
            />
            {/* <img
                            src="/card.png"
                            alt="Business Card"
                            className="w-40 md:w-56 absolute top-12 right-0 md:right-[-40px] rotate-6 shadow-lg"
                        /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
