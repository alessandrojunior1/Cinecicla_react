import { poppins } from 'next/font/google'
import "./globals.css"
import { CardsProvider, useCard } from '@/context/LixeirasContext'
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cinecicla</title>
      </head>
      <body className="poppins"><CardsProvider>{children}</CardsProvider></body>
    </html>
  )
}

