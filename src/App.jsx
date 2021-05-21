import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Items from './components/Items';

function App() {

  const [open, setOpen] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar open={open} setOpen={setOpen}/>

        <Switch>
          <Route path="/" render={() => <Home to="/" open={open}></Home>}></Route>
          <Route path="/items" component={Items}></Route>
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
