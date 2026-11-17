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
        <Footer>{children}</Footer>
      </body>
    </html>
  );
}
