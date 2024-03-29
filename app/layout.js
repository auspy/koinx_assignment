import { Inter } from "next/font/google";
import "./globals.css";
import { Breadcrum, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Koinx Assignment | Kshetez Vinayak",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container">
          <Breadcrum />
        </div>
        {children}
      </body>
    </html>
  );
}
