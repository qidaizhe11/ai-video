import SignIn from "@/components/sign-in"

export default async function LoginPage(props: {
  searchParams: { callbackUrl: string | undefined }
}) {
  const { callbackUrl } = await props.searchParams;
  return (
    <div className="flex h-screen items-center justify-center">
      <SignIn callbackUrl={callbackUrl} />
    </div>
  )
}
