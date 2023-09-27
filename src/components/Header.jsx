import '../App.css'


function Header() { 
  
return(
    <div className="flex items-center justify-between w-screen h-40 pl-4 bg-neutral">

      <header className="">
        <h1 id="logo-text" className=" text-white text-[5rem] ">BANKI BRUNCH</h1>
      </header>
      
      <img id="waffle" className="w-80" src="src/assets/waffle.png"/>
    </div>
)
}
export default Header
