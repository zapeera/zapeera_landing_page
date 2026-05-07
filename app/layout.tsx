import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/app/components/ui/toaster";
import { Toaster as Sonner } from "@/app/components/ui/sonner";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import { ReactQueryProvider } from './providers'
import Loading from './components/ui/loading'
import PerformanceMonitor from './components/PerformanceMonitor'
import GoogleVerification from './components/GoogleVerification'
import GoogleAnalytics from './components/GoogleAnalytics'

// Single typeface across the site. Weights trimmed to the four actually used
// in JSX (font-normal, font-medium, font-semibold, font-bold). Italic is kept
// for the hero headline emphasis. font-display: swap is the next/font default.
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: {
    default: 'Zapeera — Pharmacy software, built for Pakistan',
    template: '%s | Zapeera'
  },
  description: 'Cloud POS and inventory software for Pakistani pharmacies. Track every batch and expiry, replace the end-of-day hisaab, and see which medicines actually make profit. Free for 30 days, no credit card.',
  keywords: [
    'pharmacy software Pakistan',
    'pharmacy POS',
    'medicine inventory software',
    'expiry tracking pharmacy',
    'pharmacy management Pakistan',
    'cloud POS Pakistan',
    'PKR pharmacy software',
    'Lahore pharmacy software',
    'Karachi pharmacy software',
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zapeera.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zapeera.com',
    title: 'Zapeera — Pharmacy software, built for Pakistan',
    description: 'Cloud POS and inventory software for Pakistani pharmacies. Track every batch and expiry, replace the end-of-day hisaab.',
    siteName: 'Zapeera',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zapeera — Pharmacy software, built for Pakistan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zapeera — Pharmacy software, built for Pakistan',
    description: 'Cloud POS and inventory software for Pakistani pharmacies. Free for 30 days, no credit card.',
    images: ['/og-image.jpg'],
    creator: '@zapeera',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'q021Kxdt-XlMmlEMsW8LMeSppqPXjr3IfMw1llhujFI',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-montserrat bg-white`} suppressHydrationWarning>
        <GoogleAnalytics />
        <GoogleVerification />
        <ReactQueryProvider>
          <TooltipProvider>
            <Loading>
              <PerformanceMonitor />
              <Toaster />
              <Sonner />
              {children}
            </Loading>
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
