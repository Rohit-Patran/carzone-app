import './globals.css'
import type { Metadata } from 'next';
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CarZone | Book your car with ease',
  description: 'Book your car the easiest way',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
