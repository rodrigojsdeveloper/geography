import { Metadata } from 'next'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: '404',
}

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-[41.25rem] flex-col gap-y-8 px-4 pt-24">
      <h1 className="text-primary text-5xl font-semibold leading-none">404</h1>
      <div className="flex flex-col gap-y-2">
        <h2>Page is not found</h2>
        <p className="opacity-50">
          The route you&apos;re trying to access doesn&apos;t exist.
        </p>
      </div>
      <div>
        <Link href="/" className="flex w-fit flex-row items-center gap-2">
          <MoveLeft size={12} strokeWidth={2} />
          Back to home
        </Link>
      </div>
    </main>
  )
}
