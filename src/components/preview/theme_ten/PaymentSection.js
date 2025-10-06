import React from "react";

const PaymentSection = () => {
    return (
        <div className="bg-pink-200 rounded-xl shadow-lg p-6 max-w-lg mx-auto" style={{
            backgroundImage: "url('/assets/banner/theme-ten.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}>
            <h3 className="font-bold text-lg mb-4">Payment</h3>
            <p><b>Paypal:</b> yourid@domain.com</p>
            <p><b>UPI:</b> yourid@domain.com</p>
            <p><b>Crypto Wallet:</b> faffsdf-5465dfgsdf-dfs44dfgfdg-dfgsdfg</p>

            <div className="mt-4">
                <p className="font-semibold">Pay through QR code</p>
                <img
                    src="https://api.qrserver.com/v1/create-qr-code/?data=PaymentQRCode&size=150x150"
                    alt="QR Code"
                    className="mt-3 w-40"
                />
            </div>
        </div>
    );
};

export default PaymentSection;
