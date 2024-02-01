import "@/styles/globals.css";
import type { Metadata } from "next";
import { poppins } from "./ui/fonts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "URL shortening API landing page | Frontend Mentor Challenge",
  description: "Generate shortened links from provided URLs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="min-w-[var(--min-layout-width)] bg-neutral-very-dark-violet 3xl:text-[var(--max-font-size)]"
    >
      <body className={`${poppins.className} antialiased`}>
        <div className="relative z-0 bg-white contrast-more:bg-white">
          <Navbar />
          {children}
        </div>
        <Footer />

        <aside className="sr-only" aria-label="attribution">
          Challenge by Frontend Mentor. Coded by Antonio Mercado.
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            aria-label="View Front End Mentor Website"
          />
        </aside>
      </body>
    </html>
  );
}
