import React, {useState} from "react";
import fire from "./config/fire";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  return <div className="App">{user ? <Home setUser={setUser} /> : <Login setUser={setUser} />}</div>;
}

export default App;
