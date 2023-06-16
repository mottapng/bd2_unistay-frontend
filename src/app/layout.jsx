import { Header } from '@/components/Header'
import { Inter, DM_Sans } from 'next/font/google'
import { Footer } from '@/components/Footer'
import './globals.scss'
import { AuthContextProvider } from '@/context/AuthProvider'

const inter = Inter({
  variable: '--font-Inter',
  subsets: ['latin'],
})

const dm_sans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: '700',
})

export const metadata = {
  title: 'UniStay',
  description: 'Encontre vagas em repúblicas pelo menor custo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dm_sans.variable} ${inter.variable}`}>
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
