import '../styles/header_footer.css'
import logo from '../assets/logoKechian.png'



function Header() {
  return (
    

<header>
    
    <nav class="navCentro">
        <a href="/"><img class="logo" src={logo} alt=""/></a>
    </nav> 




    <nav class="navAtras">
        <a href="http://localhost:2020" class="buscar"> Volver al sitio </a> 
    </nav>
    

</header>

      
    
  )
}

export default Header;


