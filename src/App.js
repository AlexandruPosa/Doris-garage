import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Acasa from "./Pages/Acasa/Acasa";
import DespreNoi from "./Pages/Despre-noi/DespreNoi";
import Galerie from "./Pages/Galerie/Galerie";
import Servicii from "./Pages/Servicii/Servicii";
import Contact from "./Pages/Contact/Contact";
import NavigationBar from "./Components/NavigationBar/NavigationBar";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>

          <NavigationBar />

          <Switch>
            <Route path="/" exact component={Acasa} />
            <Route path="/Despre-noi" component={DespreNoi} />
            <Route path="/Galerie" component={Galerie} />
            <Route path="/Servicii" component={Servicii} />
            <Route path="/Contact" component={Contact} />


          </Switch>
        </Router>


      </React.Fragment>
    );
  }
}

export default App;
