import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Minesweeper from "./Views/Minesweeper";
import ContactMe from "./Views/ContactMe";

function App() {
  return (
    <div>
      <Router>
        <Header />

        <div className="p-3">
          <Switch>
            <Route exact path="/PortfolioSite">
              {/*<HelloWorld name="Angela" />*/}
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contactMe">
              <ContactMe />
            </Route>
            <Route path="/Minesweeper">
              <Minesweeper />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
