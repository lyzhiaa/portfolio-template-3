import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'lyzhia  - Portfolio',
  description: 'Write something about yourself here....',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}