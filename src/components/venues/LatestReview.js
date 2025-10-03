"use client";
import Image from "next/image";

const reviews = [
  {
    venue: "Fun Planet",
    text: "Our wedding spot at FunPlanet Resort was truly unforgettable thanks to JK Hospitality. Professional staff, flawless arrangements, and seamless execution.",
    reviewer: "Syed Amaan",
    date: "24 Sep 2025",
    image: "/assets/cityimage/lv1.jpeg",
  },
  {
    venue: "Fun Planet",
    text: "We had an incredible experience at FunPlanet Resort, thanks to JK Hospitality. The staff was polite, service top-notch, and everything executed beautifully.",
    reviewer: "Shreyansh Gajbhiye",
    date: "24 Sep 2025",
    image: "/assets/cityimage/lv1.jpeg",
  },
  {
    venue: "Fun Planet",
    text: "A heartfelt thanks to JK Hospitality for managing our wedding spot at FunPlanet Resort with such excellence. The service was seamless, the staff attentive, and everything perfect.",
    reviewer: "Sapna Mahadule",
    date: "24 Sep 2025",
    image: "/assets/cityimage/lv1.jpeg",
  },
  {
    venue: "Regalia Greens",
    text: "This place is awesome 😍, have a great professional team, theme they used for function is also very attractive. Thank you so much for this wonderful experience.",
    reviewer: "Rishabh Rai",
    date: "24 Sep 2025",
    image: "/assets/cityimage/lv1.jpeg",
  },
];

const LatestReview = () => {
  return (
    <section className="p-6 font-sans">
      <h2 className="text-2xl font-bold mb-6">Latest Reviews</h2>
      <div className="flex flex-col gap-4">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="rounded-2xl shadow-sm border p-4 flex gap-4 bg-white"
          >
            <Image
              src={review.image}
              alt={review.venue}
              width={64}
              height={64}
              className="h-16 w-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">{review.venue}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.text}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Reviewed By:{" "}
                <span className="font-medium">{review.reviewer}</span> |{" "}
                {review.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestReview;
