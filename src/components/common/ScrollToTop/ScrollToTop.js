"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200) setVisible(true);
            else setVisible(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {visible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 
                     bg-gradient-to-br from-yellow-600 to-red-600 
                     text-white p-4 rounded-full shadow-lg 
                     backdrop-blur-md border border-white/20 
                     hover:scale-110 hover:shadow-purple-500/40 
                     transition-all duration-300 animate-bounce-slow"
                >
                    <ArrowUp size={22} className="drop-shadow-md" />
                </button>
            )}
        </>
    );
}
