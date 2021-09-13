import React from "react";
import { Switch, Route } from "react-router";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Home from "./layouts/Home/Home";
import Chats from "./layouts/Chats/Chats";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
          <Banner />
        </Route>
        <Route path="/chats" component={Chats} />
      </Switch>
    </div>
  );
}

export default App;
