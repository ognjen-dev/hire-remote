import React from 'react';
import 'App/App.css';
import GetHired from 'App/Pages/GetHired'
import Hire from 'App/Pages/Hire'
// @ts-ignore
import { Route, BrowserRouter as Router, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      </div>
      <Route path="/" exact component={GetHired} />
      <Route path="/get-hired" component={Hire} />
    </Router>
  );
}

export default App;
