

export default function AboutSection() {
    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center bg-white px-6 py-12"
        >
            <div className="max-w-7xl w-full">
                {/* Heading */}
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
                    ITAP NEW GENERATION BUSINESS CARDS
                </h2>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Text */}
                    <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                        <p>
                            Time does not stand still, and along with it, technologies and ways
                            of interaction between people change. We have prepared not only a
                            worthy replacement for standard business cards, but also changed
                            the very approach to the exchange of contact information.
                        </p>
                        <p>
                            Previously, you needed to make hundreds of paper business cards in
                            a printing house, which took up space in your wallet, and after use
                            they were usually thrown away. The time of paper has passed and now
                            your wallet can contain only one or several business cards for all
                            occasions.
                        </p>
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

