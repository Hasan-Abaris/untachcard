const FAQSection = () => {
    const faqs = [
        {
            question: "What is DLS Forest Vines Resort's policy on catering?",
            answer: "This venue has Inhouse & outside catering allowed",
        },
        {
            question: "What is DLS Forest Vines Resort's policy on decor?",
            answer: "Outside decorators permitted",
        },
        {
            question: "Can we host small functions at DLS Forest Vines Resort?",
            answer: "Less than 50 Pax allowed",
        },
        {
            question: "Is outside alcohol permitted at DLS Forest Vines Resort?",
            answer: "In house alcohol available, Outside alcohol permitted",
        },
    ];

    return (
        <div className="bg-white border rounded-md p-6 mt-10">
            <h2 className="text-xl font-semibold mb-4">
                FAQ about DLS Forest Vines Resort
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 p-4 rounded-md shadow-sm"
                    >
                        <p className="font-semibold text-sm md:text-base mb-1">
                            {faq.question}
                        </p>
                        <p className="text-gray-700 text-sm md:text-base">
                            {faq.answer}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQSection;
