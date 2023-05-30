import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'aridutomo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className='h-full'>
          {children}
        </main>
      </body>
    </html>
  )
}
