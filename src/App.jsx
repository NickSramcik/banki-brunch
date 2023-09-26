import './App.css'
import AnswerBox from './components/AnswerBox.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useAuthContext } from "./contexts/AuthContext"
import Question from './components/Question.jsx'
import { useState } from 'react'


function App() {

  const auth = useAuthContext();
  const isAuthenticated = auth.isAuthenticated();

  function ShowAnswerBtn() {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
  
    function toggle() {
      setIsOpen((isOpen) => !isOpen);
      setVisible((prev) => !prev);
    }
    
    return (
      <div>
        {isOpen && <AnswerBox />}
        {visible && (
        <button onClick={toggle} className="bg-primary border-[2px] border-full border-accent rounded-full p-2 text-secondary font-bubble tracking-wider text-2xl">GET ANSWER</button>
            )}
        </div>
    );
  }

  return (

    <div className="flex flex-col items-center justify-between px-4 mx-auto font-display bg-base-100 h-screen overflow-hidden">
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

      <main className='flex flex-col gap-4 items-center text-center font-body'>
        <Question />
        <ShowAnswerBtn />
      </main>

      <Footer />
    </div>
  )
}

export default App
