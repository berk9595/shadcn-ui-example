import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex gap-8 p-4">
      <Link href={'/mail'}>Mail</Link>
      <Link href={'/'}>Home</Link>
    </main>
  )
}
