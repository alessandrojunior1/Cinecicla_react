import { poppins } from 'next/font/google'
import '@/app/globals.css'

export default function FeedbacksLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Cinecicla</title>
      </head>
      <body className="poppins">{children}</body>
    </html>
  )
}
