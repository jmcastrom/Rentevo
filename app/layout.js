import './globals.css'
import { Inter } from 'next/font/google'
import Providers from "@/utils/Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rentevo',
  description: 'Generated by EclipseTech',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#FFFFFF' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
