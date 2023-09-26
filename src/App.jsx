import { useState } from 'react'
import { questions } from '../data/questions.js'
import { parse } from 'node-html-parser'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useAuthContext } from "./contexts/AuthContext"
import AnswerBox from './components/AnswerBox.jsx'

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

  const auth = useAuthContext();
  const isAuthenticated = auth.isAuthenticated();

  return (

    <div className="flex flex-col items-center px-4 mx-auto font-display bg-base-100">
      <Header/>
      {isAuthenticated ?
        <form onSubmit={() => auth.logout()} className="btn-login">
          <button type="submit" className="btn btn-primary">
            Logout
          </button>
        </form>
        : <form action='/auth/discord' className="btn-login">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      }
      <header className="mt-16 mb-7">
        <h1 className=" text-white text-[3rem]">Banki Brunch</h1>
      </header>

      <main className='flex flex-col gap-4 items-center max-w-lg text-center font-body'>

        <AnswerBox />

        <div id="answer" className={`max-w-xl card bg-primary text-secondary`}>
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a dignissimos officia nostrum vitae sequi maxime, delectus non iste, error consequatur consequuntur ad deleniti est aspernatur vero laborum tenetur fugiat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a dignissimos officia nostrum vitae sequi maxime, delectus non iste, error consequatur consequuntur ad deleniti est aspernatur vero laborum tenetur fugiat!</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
