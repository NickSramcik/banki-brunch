import { useState } from "react"
import LiveMessage from "./LiveMessage"

function LiveChat() {
  const [hide, setHide] = useState<boolean>(true)

  return (
    <aside className="w-full">
      <button
        className="rounded-full w-full text-center border-2 py-2 text-white font-medium hover:bg-blue-600 hover:text-white"
        onClick={() => setHide((s) => !s)}
      >
        {hide ? " Show live chat" : "Close live chat"}
      </button>
      {!hide && <ChatBox />}
    </aside>
  )
}

function ChatBox() {
  return (
    <div className="w-full rounded-lg text-neutral-50 lg:mt-4 bg-neutral-800 max-h-[25rem] overflow-scroll overflow-x-hidden ">
      <LiveMessage />
      <LiveMessage />
      <LiveMessage />
    </div>
  )
}

export default LiveChat
