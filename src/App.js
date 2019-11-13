import React from 'react';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Nav from './Nav'
import Home from './Component/Home'
import Login from './Component/Login'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>

        </Switch>
      </div>

    </Router>
    
  );
}



export default App;
