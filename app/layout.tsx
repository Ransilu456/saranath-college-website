import Header from "@/components/layout/Header";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
// import { ToastProvider } from "@/components/ui/Toast"; // Commenting out until verified/needed

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Saranath College - Wisdom & Virtue',
  description: 'Nurturing the next generation of leaders with traditional values and modern education.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-600 antialiased selection:bg-amber-100 selection:text-amber-900 flex flex-col min-h-screen font-sans">
        {/* <ToastProvider> */}
        {children}
        {/* </ToastProvider> */}
      </body>
    </html>
  );
}
