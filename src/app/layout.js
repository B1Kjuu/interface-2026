import { Montserrat, Inter } from 'next/font/google'
import './globals.css'
import interfaceLogo from '@/assets/interface-logo.png'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'INTERFACE 2026',
  description: 'Bridging Core Computer Engineering Principles with Emerging Industry Practice.',
  icons: {
    icon: interfaceLogo.src,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
          as="style"
          onLoad="this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        </noscript>
      </head>
      <body className="font-inter">
        <div aria-hidden="true" className="global-ambient-layer" />
        <div className="relative z-10 min-h-screen">{children}</div>
      </body>
    </html>
  )
}