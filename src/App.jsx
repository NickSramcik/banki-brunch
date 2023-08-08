import { useState } from 'react'
import { questions } from '../data/questions.js'
import { parse } from 'node-html-parser'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import './App.css'

const pickQuestion = (questions) => {
  return parse(questions[Math.floor(Math.random() * questions.length)].question).text
}

function App() {

  const [isDarkMode, setDarkMode] = React.useState(true);

  const toggleDarkMode = () => {
    setDarkMode(previousValue => !previousValue);
  };

  const [activeQuestion, setActiveQuestion] = useState(pickQuestion(questions));
  
  return (
    <div className={`flex flex-col items-center px-4 mx-auto min-h-screen font-display ${isDarkMode ? "bg-[#081315]" : "bg-[#CBD1DB]"}`}>
      <DarkModeSwitch className='self-end mt-4 text-xl'
        style={{ marginBottom: '2rem'}}
        checked={!isDarkMode}
        onChange={toggleDarkMode}
        sunColor="#CBD1DB"
        moonColor="#223A3A"
        size={40}
      />
      <header className=" pb-7">
        <h1 className={`text-white text-[3rem] ${isDarkMode ? "text-[#CBD1DB]" : "text-[#223A3A]"}`}>Banki Brunch</h1>
      </header>
      <main className='flex flex-col gap-4 items-center max-w-lg text-center font-body'>
        <button onClick={() => setActiveQuestion(pickQuestion(questions))} className={`btn btn-wide text-[1.3rem] mb-6 ${isDarkMode ? "bg-[#223A3A] text-[#CBD1DB]" : "bg-[#223A3A] text-[#CBD1DB]"} hover:bg-[#447474]`}>Get Question</button>
        <div id="question" className=''>
          <h2 className={`text-[1.5rem] pb-10 ${isDarkMode ? "text-[#CBD1DB]" : "text-[#223A3A]"}`}>{activeQuestion}</h2>
        </div>
        <div id="answer" className={`max-w-xl card text-[#E7EAEE] ${isDarkMode ? "bg-[#264040]" : "bg-[#264040]"}`}>
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a dignissimos officia nostrum vitae sequi maxime, delectus non iste, error consequatur consequuntur ad deleniti est aspernatur vero laborum tenetur fugiat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a dignissimos officia nostrum vitae sequi maxime, delectus non iste, error consequatur consequuntur ad deleniti est aspernatur vero laborum tenetur fugiat!</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
