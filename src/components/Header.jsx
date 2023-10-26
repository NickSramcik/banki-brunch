import '../App.css'


function Header() { 
  
return(
    <div className="flex items-center justify-between w-full h-40 pl-4 bg-neutral">

      <header className="">
        <h1 id="logo-text" className="relative z-10 text-white text-5xl lg:text-6xl lg:text-7xl">
          <span>BANKI</span>
          <br className="md:hidden" />
          <span className="md:ml-4">BRUNCH</span>
        </h1>
      </header>
      
      <img id="waffle" className="w-80 brightness-75 lg:brightness-100" src="src/assets/waffle.png"/>
    </div>
)
}
export default Header
