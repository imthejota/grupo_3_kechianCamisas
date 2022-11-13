import './App.css'
import React, {Component} from 'react'
import Header from './components/Header';

import { Link, Route } from 'react-router-dom';


import TotalProducts from "./components/TotalProducts";
import TotalUsers from "./components/TotalUsers";
/* import Home  from './components/Home'; */
import ListadoProductos from "./components/ListadoProductos";
import UPC from "./components/UPC";
import UUC from "./components/UUC";



 class App extends Component {
  render() { 
    return (

      <>


      <Header/>
      <main>
      <section classname="listado">
      {/* <Link to='/Home'>Home</Link> */}
      <h3><Link to='/TotalProducts'>Total de productos</Link></h3>
      <h3><Link to='/TotalUsers'>Total de Usuarios</Link></h3>
      <h3><Link to='/ListadoProductos'>Listado de productos</Link></h3>
      <h3><Link to='/UPC'>Último producto creado</Link></h3>
      <h3><Link to='/UUC'>Último usuario creado</Link></h3>
      </section>
      

      <section>
      {/* <Route exact path='/Home' component={Home}/> */}
      <Route exact path='/TotalProducts' component={TotalProducts}/>
      <Route exact path='/TotalUsers' component={TotalUsers}/>
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
