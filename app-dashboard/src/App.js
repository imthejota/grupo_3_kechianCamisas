import './App.css'
import React, {Component} from 'react'
import Header from './components/Header';

import { Link, Route } from 'react-router-dom';


import TotalProducts from "./components/TotalProducts";
import TotalUsers from "./components/TotalUsers";
import Home  from './components/Home';
import ListadoProductos from "./components/ListadoProductos";
import UPC from "./components/UPC";
import UUC from "./components/UUC";



 class App extends Component {
  render() { 
    return (

      <>


      <Header/>
      <section classname="listado">
      {/* <Link to='/Home'>Home</Link> */}
      <Link to='/TotalProducts'>Total de productos</Link>
      <Link to='/TotalUsers'>Total de Usuarios</Link>
      <Link to='/ListadoProductos'>Listado de productos</Link>
      <Link to='/UPC'>Último producto creado</Link>
      <Link to='/UUC'>Último usuario creado</Link>
      </section>
      

      
      {/* <Route exact path='/Home' component={Home}/> */}
      <Route exact path='/TotalProducts' component={TotalProducts}/>
      <Route exact path='/TotalUsers' component={TotalUsers}/>
      <Route exact path='/ListadoProductos' component={ListadoProductos}/>
      <Route exact path='/UPC' component={UPC}/>
      <Route exact path='/UUC' component={UUC}/>




      </>

    )
  }
}

export default App
