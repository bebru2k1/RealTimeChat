import React from "react";
import "./App.scss";
import Banner from "./components/Banner/Banner";
import Login from "./components/Login/Login";
function App() {
  return (
    <div className="App">
      <Login />
      <Banner />
    </div>
  );
}

export default App;
