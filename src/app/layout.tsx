import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Providers } from '@/contexts'
import { cn } from '@/utils/cn'
import { Toaster } from 'sonner'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
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
          'poppins mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 py-7',
          poppins.className,
        )}
      >
        <Providers>
          <Toaster richColors position="top-center" />
          {children}
        </Providers>
      </body>
    </html>
  )
}
