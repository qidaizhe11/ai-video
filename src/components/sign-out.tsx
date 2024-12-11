import { signOut } from '@/server/auth'
import { Button } from '@/components/ui/button'

export default function Signout() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut({
          redirectTo: '/login',
        })
      }}
    >
      <Button
        variant="outline"
        size="lg"
        type="submit"
        className="flex items-center gap-2"
      >
        Sign out
      </Button>
    </form>
  )
}
