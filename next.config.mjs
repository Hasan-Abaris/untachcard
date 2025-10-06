/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export",
    images: {
        unoptimized: false,
        domains: ["res.cloudinary.com"],
    },
};

export default nextConfig;