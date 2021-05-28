import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Items from './components/Items';
import Stats from './components/Stats';

function App() {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar open={open} setOpen={setOpen}/>

        <Switch>     
          <Route path="/cosmetique" component={Items}></Route>
          <Route path="/" render={() => <Home to="/" open={open}></Home>}></Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
