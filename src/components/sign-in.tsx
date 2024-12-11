import { FaGithub } from 'react-icons/fa'
import { signIn } from '@/server/auth'
import { Button } from '@/components/ui/button'

export default function SignIn({
  callbackUrl,
}: {
  callbackUrl: string | undefined
}) {
  return (
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
        className="flex items-center gap-2"
      >
        <FaGithub className="w-5 h-5" />
        Continue with Github
      </Button>
    </form>
  )
}
