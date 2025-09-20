import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/logo.svg'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  return (
    <header className='sticky top-0 z-50 w-full border-b  bg-background/95 backdrop-blur-[backdrop-filter]:bg-background/60'>
      <div className='container flex min-h-16 items-center mx-auto px-4 md:px-6 lg:px-8'>
        <Link href='/' className='flex items-center space-x-2 mr-4'>
          <Image src={Logo} className='size-9' alt='logo' />
          <span className='font-bold'>Business LMS</span>
        </Link>

        <nav>
          <div className='flex items-center space-x-2'>
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text-sm font-medium transition-colors hover:text-primary'
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
