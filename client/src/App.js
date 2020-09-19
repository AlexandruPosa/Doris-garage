import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Acasa from "./Pages/Acasa/Acasa";
import DespreNoi from "./Pages/Despre-noi/DespreNoi";
import Galerie from "./Pages/Galerie/Galerie";
import Servicii from "./Pages/Servicii/Servicii";
import Contact from "./Pages/Contact/Contact";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { ImplicitCallback } from '@okta/okta-react';


class App extends Component {

  state = {
    apiResponse: ""
  };

  callAPI() {
    fetch("http://localhost:9000/testApi")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
    this.callAPI();
  }
  render() {
    return (
      <React.Fragment>
        <Router>

          <NavigationBar />

          <Switch>
            <Route path="/" exact component={Acasa} />
            <Route path="/implicit/callback" component={ImplicitCallback} />
            <Route path="/Despre-noi" component={DespreNoi} />
            <Route path="/Galerie" component={Galerie} />
            <Route path="/Servicii" component={Servicii} />
            <Route path="/Contact" component={Contact} />


          </Switch>
        </Router>
        <p>{this.state.apiResponse}</p>

      </React.Fragment>

    );
  }
}

export default App;
