import React, { useState, useEffect } from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import { db } from './data/firebaseConfig';

import Header from './templates/Header'
import Footer from './templates/Footer'

import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import './css/App.css';

const App = ()=>{
  const  [data, setData] = useState([]);

  const truc = [];

  const getData = (dataRetrived)=>{
      const ref = db.ref('/Projects');
      ref.on('value', snap=>{
          snap.forEach(doc=>{
              dataRetrived.push(doc.val());
          })
      })
  }

  useEffect(() => {
    window.addEventListener("load", ()=>{
          getData(truc);
          setData(truc);
    });
  })

  const link_root = process.env.PUBLIC_URL + '/';
  const link_portfolio = process.env.PUBLIC_URL + '/portfolio';
  const link_contact = process.env.PUBLIC_URL + '/contact';


  return (
    <Router>
        <div className="App">

            <Header/>

            {/* */}

            <Switch>
              <Route exact path={link_root}  component={Home}/>
              <Route exact path={link_portfolio} component={Portfolio}>
                <Portfolio vara={ data }/>
              </Route>
              <Route exact path={link_contact} component={Contact}/>
            </Switch>

            {/** */}

            <Footer/>

       </div>
    </Router>
  );
}

export default App;
