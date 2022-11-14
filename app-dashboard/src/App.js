import './App.css'
import React, {Component} from 'react'
import Header from './components/Header';
import { Link, Route } from 'react-router-dom';


import TotalProducts from "./components/TotalProducts";
import TotalUsers from './components/TotalUsers';
import ListUsers from "./components/ListUsers";
import ListadoProductos from "./components/ListadoProductos";
import UPC from "./components/UPC";
import UUC from "./components/UUC";



 class App extends Component {
  render() { 
    return (

      <>
      <Header/>
      <main> //! CORREGIR TODO, son PANELES NO LINKS
      <section classname="listado">
      <h3><Link to='/TotalProducts'>Total de productos</Link></h3>
      <h3><Link to='/TotalUsers'>Total de usuarios</Link></h3>
      <h3><Link to='/ListUsers'>Listado de usuarios</Link></h3>
      <h3><Link to='/ListadoProductos'>Listado de productos</Link></h3>
      <h3><Link to='/UPC'>Último producto creado</Link></h3>
      <h3><Link to='/UUC'>Último usuario creado</Link></h3>
      </section>
      

      <section>
      <Route exact path='/TotalProducts' component={TotalProducts}/>
      <Route exact path='/TotalUsers' component={TotalUsers}/>
      <Route exact path='/ListUsers' component={ListUsers}/>
      <Route exact path='/ListadoProductos' component={ListadoProductos}/>
      <Route exact path='/UPC' component={UPC}/>
      <Route exact path='/UUC' component={UUC}/>
      </section>
      </main>




      </>

    )
  }
}

export default App
