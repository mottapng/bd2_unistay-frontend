import { Header } from '@/components/Header'
import { Inter, DM_Sans } from 'next/font/google'
import { Footer } from '@/components/Footer'
import './globals.scss'
import { AuthContextProvider } from '@/context/AuthProvider'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-dm-sans'
})

export const metadata = {
  title: 'UniStay',
  description: 'Encontre vagas em repúblicas pelo menor custo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${dm_sans.variable}`}>
      <body>
        <AuthContextProvider>
          <Header />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  )
}
