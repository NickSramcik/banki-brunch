import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="flex flex-col items-center px-4 mx-auto font-display">
      <header className="pt-32 pb-7">
        <h1 className=" text-white text-[3rem]">Banki Brunch</h1>
      </header>
      <main className='flex flex-col items-center max-w-lg text-center font-body'>
        <button className="btn btn-primary btn-wide text-[1.3rem] mb-12">Get Question</button>
        <div id="question" className=''>
          <h2 className='text-[1.5rem] pb-12'>What are the pros and cons of using Promises instead of callbacks?</h2>
        </div>
        <div id="answer" className="max-w-xl card">
          <div className="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a dignissimos officia nostrum vitae sequi maxime, delectus non iste, error consequatur consequuntur ad deleniti est aspernatur vero laborum tenetur fugiat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a dignissimos officia nostrum vitae sequi maxime, delectus non iste, error consequatur consequuntur ad deleniti est aspernatur vero laborum tenetur fugiat!</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
