import "../App.css"
import { useState } from 'react'
import { questions } from '../../data/questions.js'
import { parse } from 'node-html-parser'

/*
This shuffle function uses the Fisher-Yates shuffle algorithm
It returns a new shuffled array, and more importantly it is 
unbiased unlike some other common shuffling algorithms.

Resources:
- Visit https://javascript.info/task/shuffle to learn more
- Wiki: https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
*/
function shuffle(array) {
  let new_array = [...array];
  for (let i = new_array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    [new_array[i], new_array[j]] = [new_array[j], new_array[i]];
  }

  return new_array;
}

export default function Question() {

  // Initialize a set of random question indexes per review session
  const [sessionIndexes, setSessionIndexes] = useState(shuffle(new Array(questions.length).fill(0).map((_, i) => i)));

  // The current index into sessionIndexes
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);


  const handleNextQuestion = () => {
    // Increment actionQuestionIndex and rollover if it exceeds
    // the length of the questions Array
    let next_index = (activeQuestionIndex + 1) % sessionIndexes.length;
    console.log(activeQuestionIndex, next_index)
    setActiveQuestionIndex(next_index)
  }

  const handlePrevQuestion = () => {
    // To avoid negative indexes, the previous question index is calculated
    // by adding the total number of questions (minus 1) to the current index
    // and rolls over to the beginning of the range using a modulus whenever 
    // the new index exceeds the length of the questions Array
    let prev_index = (activeQuestionIndex + sessionIndexes.length - 1) % sessionIndexes.length;
    console.log(activeQuestionIndex, prev_index)
    setActiveQuestionIndex(prev_index)
  }

  return (
    <div className="flex flex-row gap-8 justify-center justify-items-center mb-8">
      <svg
        onClick={handlePrevQuestion}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        className="w-80 h-20 cursor-pointer" // Set the fixed width and height here
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        />
      </svg>
      <div id="question" className="flex flex-col justify-center w-96">
        {/* Use the activeQuestionIndex to access the corresponding index into questions for the current session
            Then use the parse module to handle any HTML formatting in the question and return the formatted text
        */}
        <h2 className={`text-[1.5rem] pb-0 text-secondary`}>
          {parse(questions[sessionIndexes[activeQuestionIndex]].question).text}
        </h2>
      </div>
      <svg
        onClick={handleNextQuestion}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.5"
        stroke="currentColor"
        className="w-80 h-20 cursor-pointer" // Set the fixed width and height here
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5"
        />
      </svg>
    </div>
  )
}