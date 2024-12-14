import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { auth } from '@/server/auth'

const Navbar = async () => {
  const session = await auth()
  const user = session?.user

  console.log('user', user)

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-black backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-white">AI</span>
        </Link>

        {/* 用户信息/登录按钮 */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-white">{user.name}</span>
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src={user.image || ''}
                  alt="用户头像"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className={buttonVariants({ variant: 'outline' })}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
