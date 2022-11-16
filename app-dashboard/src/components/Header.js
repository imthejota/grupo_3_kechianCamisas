import styles from '../styles/header.module.css'
/* import '../styles/header_footer.css' */
import logo from '../assets/logoKechian.png'
import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Header extends Component {
  render() { 
    return (
            <header className={styles.header}>
              <nav className={styles.navCentro}>
                <Link to="/"><img classname={styles.logo} src={logo} alt=""/> </Link>
              </nav>  
                    
              <nav className={styles.navAtras}>
                <a className={styles.volver} href="http://localhost:2020"> Volver al sitio </a>
              </nav>     
            </header>
    );
  }
}

