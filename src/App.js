import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import Home from "./Layout/Page/Home";
import Login from "./Layout/Page/Login";
import Card from "./Layout/Components/Card"

const App = () => {
  return (
    <Router>
      <Provider store={Store}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
