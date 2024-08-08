import AppLayout from "../ui/AppLayout"
import Button from "../ui/Button"

function Home() {
  return (
    <AppLayout>
      <div className="text-neutral-50 flex items-center justify-center gap-4 w-full h-screen">
        <Button size="xl" to="djj">
          Join a room
        </Button>
        <Button size="xl">Host</Button>
      </div>
    </AppLayout>
  )
}

export default Home
