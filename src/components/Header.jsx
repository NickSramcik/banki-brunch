import '../App.css'


function Header() { 
  
return(
    <div className="flex items-center justify-between w-screen h-40 pl-4 bg-neutral">

      <header className="">
        <h1 id="logo-text" className=" text-white lg:text-7xl md:text-6xl text-5xl">BANKI BRUNCH</h1>
      </header>
      
      <img id="waffle" className="lg:w-80 md:w-80 w-72" src="src/assets/waffle.png"/>
    </div>
)
}
export default Header
