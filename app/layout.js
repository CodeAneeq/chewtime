import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "ChewTime - CodeAneeq",
  description: "An Web app for restuarant that makes live easy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable}`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
