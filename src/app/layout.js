
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Header2 from "@/components/common/header2/Header2";
import Footer2 from "@/components/common/footer2/Footer2";
import { Providers } from "./reduxToolkit/provider";
import ClientLayout from "./ClientLayout";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Untachcards",
  description:
    "Create your professional digital vCard in minutes. Showcase your contact details, portfolio, social links, and business profile — all in one personalized digital card that’s easy to share and works seamlessly across all devices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Header /> */}
        <Providers>
          <main >
            {/* <Header2 />
            {children}
            <Footer2 /> */}
            <ClientLayout>{children}</ClientLayout>
          </main>
        </Providers>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
