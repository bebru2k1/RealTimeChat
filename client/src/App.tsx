import React from "react";
import { Switch, Route, useHistory } from "react-router";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Home from "./layouts/Home/Home";
import Chats from "./layouts/Chats/Chats";
import ProtectedRoute from "./route/ProtectedRoute";
import { useAppSelector } from "./app/hooks";
import { authSelector } from "./features/AuthSlice";

function App() {
  const { isAuthenticated } = useAppSelector(authSelector);
  console.log(isAuthenticated);
  const history = useHistory();
  return (
    <div className="App">
      <Switch>
        {isAuthenticated ? (
          history.push("/chats")
        ) : (
          <Route exact path="/">
            <Home />
            <Banner />
          </Route>
        )}
        <ProtectedRoute path="/chats" component={Chats} />
      </Switch>
    </div>
  );
}

export default App;
