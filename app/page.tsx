import { ThemeToggle } from '@/components/ui/themeToggle'

import { headers } from 'next/headers'
import { auth } from '@/lib/auth'
import { Button } from '@/components/ui/button'

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  return (
    <div className='p-24'>
      <h1 className='text-3xl font-bold underline text-red-500'>
        Hello, Buss LMS!
      </h1>
      <ThemeToggle />
      {session ? <p>{session.user?.name}</p> : <Button>Logout</Button>}
    </div>
  )
}
