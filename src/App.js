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

  const _0x4fbd=['push','ref','val','forEach'];(function(_0x2775e4,_0x4fbda5){const _0x5e9ca1=function(_0x20fea0){while(--_0x20fea0){_0x2775e4['push'](_0x2775e4['shift']());}};_0x5e9ca1(++_0x4fbda5);}(_0x4fbd,0x77));const _0x5e9c=function(_0x2775e4,_0x4fbda5){_0x2775e4=_0x2775e4-0x0;let _0x5e9ca1=_0x4fbd[_0x2775e4];return _0x5e9ca1;};const getData=_0x20fea0=>{const _0xe797ce=_0x5e9c,_0x41d32b=db[_0xe797ce('0x2')]('/Projects');_0x41d32b['on']('value',_0x23c0cf=>{const _0x19b497=_0xe797ce;_0x23c0cf[_0x19b497('0x0')](_0x5795ce=>{const _0x2be991=_0x19b497;_0x20fea0[_0x2be991('0x1')](_0x5795ce[_0x2be991('0x3')]());});});};

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
