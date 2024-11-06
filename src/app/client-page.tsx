// src/app/client-page.tsx
'use client'

import dynamic from 'next/dynamic'

const VisioniPresentation = dynamic(
  () => import('@/components/VisioniPresentation'),
  { ssr: false }
)

export default function ClientPage() {
  return (
    <main className="min-h-screen p-4">
      <VisioniPresentation />
    </main>
  )
}