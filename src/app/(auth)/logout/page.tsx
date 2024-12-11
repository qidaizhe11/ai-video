import SignOut from "@/components/sign-out"

export default function LogoutPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center gap-4">
      <h5>Are you sure you want to sign out?</h5>
      <SignOut />
    </div>
  )
}
