import { FaGithub, FaGoogle } from 'react-icons/fa'
import { signIn } from '@/server/auth'
import { Button } from '@/components/ui/button'

export default function SignIn({
  callbackUrl,
}: {
  callbackUrl: string | undefined
}) {
  return (
    <div className="flex flex-col gap-2">
      <form
        action={async () => {
          'use server'
          await signIn('github', {
            redirectTo: callbackUrl ?? '',
          })
        }}
      >
        <Button
          variant="outline"
          size="lg"
          type="submit"
          className="flex items-center gap-2 w-full"
        >
          <FaGithub className="w-5 h-5" />
          Continue with Github
        </Button>
      </form>

      <form
        action={async () => {
          'use server'
          await signIn('google', {
            redirectTo: callbackUrl ?? '',
          })
        }}
      >
        <Button
          variant="outline"
          size="lg"
          type="submit"
          className="flex items-center gap-2 w-full"
        >
          <FaGoogle className="w-5 h-5" />
          Continue with Google
        </Button>
      </form>
    </div>
  )
}
