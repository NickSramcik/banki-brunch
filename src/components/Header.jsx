import '../App.css'


function Header() { 
  
return(
    <div className="pl-4 bg-neutral flex justify-between h-40 flex items-center w-screen">

      <header className="">
        <h1 id="logo-text" className=" text-white text-[5rem] ">BANKI BRUNCH</h1>
      </header>
      
      <img id="waffle" className="w-80" src="src/assets/waffle.png"/>
    </div>
)
}
export default Header
