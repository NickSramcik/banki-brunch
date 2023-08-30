import { useState } from 'react'
import { questions } from '../data/questions.js'
import { parse } from 'node-html-parser'
import * as React from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import './App.css'

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

function App() {

  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    setDarkMode(previousValue => !previousValue);
  };

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
    <div className={`flex flex-col items-center px-4 mx-auto min-h-screen font-display ${isDarkMode ? "bg-[#a4784c]" : "bg-[#fbe7cc]"}`}>
      <DarkModeSwitch className='self-end mt-4 text-xl'
        style={{ marginBottom: '2rem'}}
        checked={!isDarkMode}
        onChange={toggleDarkMode}
        sunColor="#f1ddc2"
        moonColor="#33302d"
        size={40}
      />
      <header className=" pb-7">
        <h1 className={`text-[3rem] ${isDarkMode ? "text-[#f1ddc2]" : "text-[#33302d]"}`}>Banki Brunch</h1>
      </header>
      <main className='flex flex-col gap-4 items-center max-w-lg text-center font-body'>

        <div className="flex flex-row gap-8">
          <button onClick={handlePrevQuestion} className={`btn btn-wide border-[#a4784c] text-[1.3rem] mb-6 ${isDarkMode ? "bg-[#ba2829] text-[#f1ddc2]" : "bg-[#a4784c] text-[#fbe7cc]"} hover:bg-[#dc442e] hover:border-[#dc442e] hover:text-[#fbe7cc]`}>Previous</button>
          <button onClick={handleNextQuestion} className={`btn btn-wide border-[#a4784c] text-[1.3rem] mb-6 ${isDarkMode ? "bg-[#ba2829] text-[#f1ddc2]" : "bg-[#a4784c] text-[#fbe7cc]"} hover:bg-[#dc442e] hover:border-[#dc442e] hover:text-[#fbe7cc]`}>Next</button>
        </div>
        <div id="question">
          {/* Use the activeQuestionIndex to access the corresponding index into questions for the current session
              Then use the parse module to handle any HTML formatting in the question and return the formatted text
           */}
          <h2 className={`text-[1.5rem] pb-6 ${isDarkMode ? "text-[#fbe7cc]" : "text-[#33302d]"}`}>{parse(questions[sessionIndexes[activeQuestionIndex]].question).text}</h2>

        </div>
        <div id="answer" className={`max-w-xl card ${isDarkMode ? "bg-[#264040] text-[#fbe7cc]" : "bg-[#ba2829]"} text-[#fbe7cc]`}>
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a dignissimos officia nostrum vitae sequi maxime, delectus non iste, error consequatur consequuntur ad deleniti est aspernatur vero laborum tenetur fugiat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a dignissimos officia nostrum vitae sequi maxime, delectus non iste, error consequatur consequuntur ad deleniti est aspernatur vero laborum tenetur fugiat!</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
