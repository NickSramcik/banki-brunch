import './App.css'
import AnswerBox from './AnswerBox.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { useAuthContext } from "./contexts/AuthContext"
import Question from './Question.jsx'


function App() {

  const auth = useAuthContext();
  const isAuthenticated = auth.isAuthenticated();

  // Initialize a set of random question indexes per review session
  const [sessionIndexes, setSessionIndexes] = useState(shuffle(new Array(questions.length).fill(0).map((_, i) => i)));

  // The current index into sessionIndexes
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

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

    <div className="flex flex-col items-center justify-between px-4 mx-auto font-display bg-base-100 h-screen">
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
        <ShowAnswerBtn />

      
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
