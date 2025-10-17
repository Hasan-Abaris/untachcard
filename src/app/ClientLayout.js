"use client";

import { usePathname } from "next/navigation";
import Header2 from "@/components/common/header2/Header2";
import Footer2 from "@/components/common/footer2/Footer2";

export default function ClientLayout({ children }) {
    const pathname = usePathname();

    // Jaha header/footer dikhana hai
    const showHeaderFooterRoutes = [
        '/about-us', "/account", "/all-templates", "/Blog", "/cardDetails",
        "/einvites", "/forgotPassword", "/genie", "/login", "/login2",
        "/photos", "/realwedding", "/registrationComplete", "/resister",
        "/signup", "/vendors", "/venues", "/weddingCardEditor",
        "/weddingDetails", "/wedsta", "/dashboards",
    ];

    const showLayout = showHeaderFooterRoutes.some((path) =>
        pathname.startsWith(path)
    );

    return (
        <>
            {showLayout && <Header2 />}
            {children}
            {showLayout && <Footer2 />}
        </>
    );
}