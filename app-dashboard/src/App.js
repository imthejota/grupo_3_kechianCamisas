import './App.css'
import React, {Component} from 'react'
import Header from './components/Header';

import { Link, Route } from 'react-router-dom';


import TotalProducts from "./components/TotalProducts";
import TotalUsers from "./components/TotalUsers";
import  Home  from './components/Home';



 class App extends Component {
  render() { 
    return (

      <div>


      <Header/>

      <Link to='/Home'>Home</Link> <br/>
      <Link to='/TotalProducts'>Total de productos</Link> <br/>
      <Link to='/TotalUsers'>Total de Usuarios</Link> <br/>



      <Route exact path='/Home' component={Home}/>
      <Route exact path='/TotalProducts' component={TotalProducts}/>
      <Route exact path='/TotalUsers' component={TotalUsers}/>


      </div>

    )
  }
}

export default App
