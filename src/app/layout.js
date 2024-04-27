import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Sidebar from './components/Sidebar'
import background from "../../public/tonnam1.jpg";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJs',
  description: 'Generated by create next app',
  keywords: "futureskill,nextjs"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid grid-cols-6 bg-white">
          <Sidebar />
          <div className="w-full col-span-5 bg-white">{children}</div>
        </div>
      </body>
    </html>
  );
}
