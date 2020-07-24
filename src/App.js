import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HelloWorld from './Components/HelloWorld';
import CounterExample from './Components/CounterExample';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import About from './Views/About';
import ContactMe from './Views/ContactMe';



function App() {
  
  
  return (
  //pass in a prop 'name=Angela'
    <div>
      <Router>
        <Header />
        
        <div className="p-3">
          <Switch>
            <Route exact path="/">
                {/*<HelloWorld name="Angela" />*/}
                <Home />
              </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/contactus">
                <ContactMe />
            </Route>
          </Switch>
        </div>
        

        <Footer />
      </Router>
    </div>
  );
}

export default App;
