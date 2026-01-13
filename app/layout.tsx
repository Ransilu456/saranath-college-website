import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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
  title: {
    default: 'Saranath College - Wisdom & Virtue',
    template: '%s | Saranath College'
  },
  description: 'Nurturing the next generation of leaders with traditional values and modern education. Founded in 1924, Saranath College offers a holistic educational experience.',
  keywords: ['Saranath College', 'Education', 'School Sri Lanka', 'Academic Excellence', 'College News', 'School Events'],
  authors: [{ name: 'Saranath College' }],
  creator: 'Saranath College Media Unit',
  openGraph: {
    type: 'website',
    locale: 'en_LK',
    url: 'https://saranathcollege.edu.lk',
    siteName: 'Saranath College',
    title: 'Saranath College - Wisdom & Virtue',
    description: 'Nurturing the next generation of leaders with traditional values and modern education.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Saranath College Campus',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saranath College - Wisdom & Virtue',
    description: 'Nurturing the next generation of leaders with traditional values and modern education.',
    images: ['https://images.unsplash.com/photo-1541339907198-e08756ebafe1?q=80&w=2070&auto=format&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="bg-slate-50 text-slate-600 antialiased selection:bg-amber-100 selection:text-amber-900 flex flex-col min-h-screen font-sans">
        {/* <ToastProvider> */}
        <Header />
        {children}
        <Footer />
        {/* </ToastProvider> */}
      </body>
    </html>
  );
}
