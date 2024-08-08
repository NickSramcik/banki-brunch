import { useEffect, useState } from "react"
import Button from "./Button"
import FlashCard from "./FlashCard"
import getRandomNumber from "../utils/randomNumber"
import cards from "../utils/data"
const maxIndex = cards.length - 1

function CardsSlider() {
  const [index, setIndex] = useState<number>(getRandomNumber(0, maxIndex))
  const showNext = () => {
    setIndex(getRandomNumber(0, maxIndex))
  }

  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(cards[index].question)
    if (speechSynthesis.speaking) return () => speechSynthesis.cancel()
    speechSynthesis.speak(utterance)
  }, [index])
  return (
    <div className=" lg:w-[50rem]">
      <FlashCard flashCard={cards[index]} />
      <div className="mt-4 flex justify-center">
        <Button onClick={showNext}>Next</Button>
      </div>
    </div>
  )
}

export default CardsSlider
