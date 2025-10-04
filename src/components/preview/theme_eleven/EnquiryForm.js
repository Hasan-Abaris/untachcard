

export const EnquiryForm = () => {
    return (
        <div className="bg-white/30 backdrop-blur-lg rounded-2xl shadow-lg p-6 max-w-md mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-eleven.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h2 className="text-lg font-semibold mb-4 text-center">Enquiry Form</h2>
            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    className="w-full border rounded-lg p-2"
                />
                <div className="flex gap-2">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-1/2 border rounded-lg p-2"
                    />
                    <input
                        type="text"
                        placeholder="Mobile"
                        className="w-1/2 border rounded-lg p-2"
                    />
                </div>
                <textarea
                    placeholder="Type your message..."
                    className="w-full border rounded-lg p-2"
                    rows="3"
                ></textarea>
                <button className="w-full border py-2 rounded-lg hover:bg-white hover:text-black transition">
                    Send
                </button>
            </form>
        </div>
    );
};