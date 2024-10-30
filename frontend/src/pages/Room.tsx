import Discussion from "../features/discussion/Discussion"
import LiveChat from "../features/live-chat/Live-chat"
import AppLayout from "../ui/AppLayout"
import CardsSlider from "../ui/CardsSlider"

function Room() {
  return (
    <AppLayout>
      <div>
        <div className="flex mt-2 lg:mt-4 justify-between items-start gap-4">
          <div className=" flex flex-col gap-4">
            <CardsSlider />
            <Discussion />
          </div>
          <LiveChat />
        </div>
      </div>
    </AppLayout>
  )
}

export default Room
