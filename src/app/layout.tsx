import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from '@/contexts'
import { cn } from '@/utils/cn'
import './globals.css'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Geography',
  description:
    'Geography, where users can explore and have fun with countries around the world.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-7',
          inter.className,
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
