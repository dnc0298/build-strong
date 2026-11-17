import "./globals.css";

import { Roboto, Plus_Jakarta_Sans, Dancing_Script } from "next/font/google";

import Header from "./components/Header";
import Footer from "./components/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata = {
  title: "Build Strong",
  description: "Build Strong - Construiește-ți cea mai bună versiune.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ro"
      className={`${jakarta.variable} ${roboto.variable} ${dancingScript.variable} antialiased`}
    >
      <body className="min-h-screen">
        <Header />
        <div className="pointer-events-none fixed bottom-3 left-3 z-[60] rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-[10px] font-semibold tracking-[1.5px] text-white/85 backdrop-blur-md">
          DEMO · PROIECT DE PORTOFOLIU
        </div>
        <Footer>{children}</Footer>
      </body>
    </html>
  );
}
