import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Form from './Component/Form'
import Validation from './Component/validation';


function App() {


      return (
         <Router>
            <div className="">
               <Switch>
                  <Route path="/" exact component={Form} />
                  <Route path="/res" exact component={Validation} />

                  
               </Switch>
            </div>
         </Router>


      );

}


export default App;
