import parse from "node-html-parser"
import { HiOutlineSpeakerWave } from "react-icons/hi2"
// import { FaHtml5 } from "react-icons/fa"
// import { FaCss3 } from "react-icons/fa"
// import { IoLogoJavascript } from "react-icons/io5"
// import { FaNode } from "react-icons/fa"
// import { GrUserManager } from "react-icons/gr"

interface Card {
  question: string
  type: string
}

function FlashCard({ flashCard }: { flashCard: Card }) {
  const speak = () => {
    const utterance = new SpeechSynthesisUtterance(flashCard.question)
    if (speechSynthesis.speaking) return null
    speechSynthesis.speak(utterance)
  }

  return (
    <div className="rounded-lg p-8 aspect-video bg-neutral-800 flex items-center justify-center relative lg:min-h-96">
      <HiOutlineSpeakerWave
        className="absolute top-4 right-4 text-xl text-neutral-50 cursor-pointer"
        role="button"
        onClick={speak}
      />
      <p className="lg:text-2xl font-base text-neutral-50">
        {parse(flashCard.question).text}
      </p>
    </div>
  )
}

export default FlashCard
