import './App.css'
import React, {Component} from 'react'
import Header from './components/Header';
import { Switch,Route } from 'react-router-dom';
import TotalProducts from "./pages/TotalProducts";
import TotalUsers from "./pages/TotalUsers";


 class App extends Component {
  render() { 
    return (

      <div>

      <Header/>
  
      <Switch>
       <Route exact path="/TotalUsers" component={TotalUsers}/>
       <Route exact path="/TotalProducts" component={TotalProducts}/>

  
      </Switch>
        
      </div>

    )
  }
}

export default App
