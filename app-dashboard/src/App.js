import './App.css'
import React, {Component} from 'react'
import Header from './components/Header';

import { Link, Route } from 'react-router-dom';


import TotalProducts from "./components/TotalProducts";
import TotalUsers from "./components/TotalUsers";
import  Home  from './components/Home';
import ListadoProductos from "./components/ListadoProductos";
import UPC from "./components/UPC";
import UUC from "./components/UUC";



 class App extends Component {
  render() { 
    return (

      <div>


      <Header/>

      <Link to='/Home'>Home</Link> <br/>
      <Link to='/TotalProducts'>Total de productos</Link> <br/>
      <Link to='/TotalUsers'>Total de Usuarios</Link> <br/>
      <Link to='/ListadoProductos'>Listado de productos</Link> <br/>
      <Link to='/UPC'>Ultimo producto creado</Link> <br/>
      <Link to='/UUC'>Ultimo usuario creado</Link> <br/>

      

      
      <Route exact path='/Home' component={Home}/>
      <Route exact path='/TotalProducts' component={TotalProducts}/>
      <Route exact path='/TotalUsers' component={TotalUsers}/>
      <Route exact path='/ListadoProductos' component={ListadoProductos}/>
      <Route exact path='/UPC' component={UPC}/>
      <Route exact path='/UUC' component={UUC}/>




      </div>

    )
  }
}

export default App
