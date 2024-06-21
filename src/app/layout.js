"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import SideNav from "./admin/components/SideNav";
import background from "../../public/tonnam1.jpg";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={inter.className}>
        
          {pathname.includes("/login") ? (
            <div className="grid grid-cols-6 bg-white">
            <div className="w-full col-span-6 bg-white">{children}</div>
            </div>
          ) : (
            <div className="row grid grid-cols-6 bg-white">
              
                <Sidebar />
           
              <div className="w-full col-span-5 bg-white">{children}</div>
            </div>
          )}
      </body>
    </html>
  );
}
