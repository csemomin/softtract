import type { Metadata } from 'next'
import { Open_Sans, Montserrat } from 'next/font/google'
import './globals.css'

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://softtract.com'),
  title: 'Softtract',
  description: 'Softtract: Leading software agency specializing in ERP, CRM, AI Chatbots, Website Development, and AWS Cloud Services. Transform your business with innovative tech solutions.',
  keywords: 'software development, ERP solutions, CRM systems, AI chatbots, website development, AWS cloud services, business technology, digital transformation',
  openGraph: {
    title: 'Softtract',
    description: 'Leading software agency specializing in ERP, CRM, AI Chatbots, Website Development, and AWS Cloud Services.',
    url: 'https://softtract.com',
    siteName: 'Softtract',
    images: [
      {
        url: '/allfiles/img/softtract-logo.svg',
        width: 1200,
        height: 630,
        alt: 'Softtract',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Softtract',
    description: 'Leading software agency specializing in ERP, CRM, AI Chatbots, Website Development, and AWS Cloud Services.',
    images: ['/allfiles/img/softtract-logo.svg'],
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
    google: 'G-SW2FYTTEGC',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/allfiles/img/favicon.png" />
        <link rel="apple-touch-icon" href="/allfiles/img/apple-touch-icon.png" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet" />
        <link href="/allfiles/lib/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/allfiles/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/allfiles/lib/animate/animate.min.css" rel="stylesheet" />
        <link href="/allfiles/lib/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="/allfiles/lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
        <link href="/allfiles/lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
        <link href="/allfiles/css/style.css" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Softtract",
              "image": "https://softtract.com/allfiles/img/softtract-logo.svg",
              "url": "https://softtract.com",
              "telephone": "+880 1880580217",
              "email": "softtract@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Dhaka, Bangladesh",
                "addressCountry": "BD"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 23.8103,
                "longitude": 90.4125
              },
              "serviceType": [
                "ERP Solutions",
                "CRM Development",
                "AI Chatbot Creation",
                "Website Development",
                "AWS Cloud Services"
              ],
              "areaServed": ["Bangladesh", "Morocco", "International"]
            })
          }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SW2FYTTEGC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SW2FYTTEGC');
            `
          }}
        />
      </head>
      <body className={`${openSans.variable} ${montserrat.variable}`}>
        {children}
        <script src="/allfiles/lib/jquery/jquery.min.js"></script>
        <script src="/allfiles/lib/jquery/jquery-migrate.min.js"></script>
        <script src="/allfiles/lib/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/allfiles/lib/easing/easing.min.js"></script>
        <script src="/allfiles/lib/mobile-nav/mobile-nav.js"></script>
        <script src="/allfiles/lib/wow/wow.min.js"></script>
        <script src="/allfiles/lib/waypoints/waypoints.min.js"></script>
        <script src="/allfiles/lib/counterup/counterup.min.js"></script>
        <script src="/allfiles/lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="/allfiles/lib/isotope/isotope.pkgd.min.js"></script>
        <script src="/allfiles/lib/lightbox/js/lightbox.min.js"></script>
        <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
        <script src="/allfiles/contactform/contactform.js"></script>
        <script src="/allfiles/js/main.js"></script>
      </body>
    </html>
  )
} 