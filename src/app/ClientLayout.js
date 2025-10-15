"use client";

import { usePathname } from "next/navigation";
import Header2 from "@/components/common/header2/Header2";
import Footer2 from "@/components/common/footer2/Footer2";

export default function ClientLayout({ children }) {
    const pathname = usePathname();

    // Jaha header/footer nahi dikhana hai
    const noHeaderFooterRoutes = ["/preview"];

    const hideLayout = noHeaderFooterRoutes.some((path) =>
        pathname.startsWith(path)
    );

    return (
        <>
            {!hideLayout && <Header2 />}
            {children}
            {!hideLayout && <Footer2 />}
        </>
    );
}