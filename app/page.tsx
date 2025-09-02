import { ThemeToggle } from '@/components/ui/themeToggle'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-red-500'>
        Hello, Buss LMS!
      </h1>
      <ThemeToggle />
    </div>
  )
}
