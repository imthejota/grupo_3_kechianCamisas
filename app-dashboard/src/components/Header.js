import '../styles/header_footer.css'
import logo from '../assets/logoKechian.png'
import { Link } from 'react-router-dom';
import React, {Component} from 'react'



export default class Header extends Component {
  render() { 
    return (

                <header>
                    
                    <nav class="navCentro">
                        <a href="/"><img class="logo" src={logo} alt=""/></a>
                    </nav> 




                    <nav class="navAtras">
                        <a href="http://localhost:2020" class="buscar"> Volver al sitio </a> 

                        <Link to="./pages/TotalProducts">Total Productos</Link>

                        <Link to="./pages/TotalUsers"> Total Usuarios</Link> 
                    </nav>
                    

        </header>


    );
  }
}
 


