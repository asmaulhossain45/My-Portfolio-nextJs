import Navbar from "@/app/Components/Navbar/Navbar";
import { Inter } from "next/font/google";
import Header from "./Components/Header/Header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AH SOHAG",
  description: "MERN Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
