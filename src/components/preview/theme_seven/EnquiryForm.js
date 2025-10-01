
const EnquiryForm = () => {
    return (
        <div className="bg-black text-white rounded-lg p-4 shadow-md max-w-md mx-auto">
            <h3 className="font-semibold mb-3">Enquiry Form</h3>
            <form className="space-y-3">
                <input type="text" placeholder="Name" className="w-full px-3 py-2 border rounded bg-transparent" />
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded bg-transparent" />
                <input type="text" placeholder="Mobile" className="w-full px-3 py-2 border rounded bg-transparent" />
                <textarea placeholder="Type your message" className="w-full px-3 py-2 border rounded bg-transparent"></textarea>
                <button type="submit" className="px-4 py-2 border rounded-md">Send</button>
            </form>
        </div>
    );
};

export default EnquiryForm;
