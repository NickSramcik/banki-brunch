import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useAuthContext } from "./contexts/AuthContext"
import Question from './components/Question.jsx'

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

        <Question />

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
