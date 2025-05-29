import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
}); // Inter font for general text

export const metadata = {
  title: "FineFinance",
  description: "A modern AI-based finance app for managing your finances",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {/* header */}
        {children}
        {/* footer */}
        <footer className="bg-blue-100 py-12">
          <div className="container mx-auto text-center text-gray-650">
            <p>
              *Made for personal use and demonstration perpose only by MD Akash
              Mondal*
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
