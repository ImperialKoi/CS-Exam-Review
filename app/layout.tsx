import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CS Exam Review',
  description: 'A quiz app designed to help with grade 11 CS final',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
