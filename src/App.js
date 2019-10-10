import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import Home from "./components/home/home.component";
import Launch from "./components/launch/launch.component";
import Iss from "./components/iss/iss.component";
import Nasa from "./components/nasa/nasa.component";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/launch" component={Launch} />
          <Route exact path="/iss" component={Iss} />
          <Route exact path="/nasa" component={Nasa} />
        </Switch>
      </div>
    </>
  );
}

export default App;
