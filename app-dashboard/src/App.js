import './App.css'
import styles from './app.module.css'
import React, {Component} from 'react'
import Header from './components/Header';
import { Link, Route, Switch } from 'react-router-dom';

import DatosGenerales from './components/DatosGenerales';
import ListUsers from "./components/ListUsers";
import ListadoProductos from "./components/ListadoProductos";




 class App extends Component {
  render() { 
    return (

      <>
      <Header/>
      <main> 
      <section>
      <h3 className='links'><Link to="/">Datos generales</Link></h3>
      <h3 className='links'><Link to='/usuarios'>Listado de usuarios</Link></h3>
      <h3 className='links'><Link to='/productos'>Listado de productos</Link></h3>
      </section>
      

      <section>
      <Switch>
      <Route exact path='/' component={DatosGenerales}/>
      <Route exact path='/usuarios' component={ListUsers}/>
      <Route exact path='/productos' component={ListadoProductos}/>
      </Switch>
      </section>
      
      </main>




      </>

    )
  }
}

export default App
