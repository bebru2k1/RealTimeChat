import React from "react";
import { Switch, Route } from "react-router";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Login from "./components/Login/Login";
import Chats from "./layouts/Chats/Chats";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
          <Banner />
        </Route>
        <Route path="/chats" component={Chats} />
      </Switch>
    </div>
  );
}

export default App;
