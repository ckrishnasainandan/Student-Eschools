import "./App.css";
import Body from "./Components/Body/Body";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import { useDataLayerValue } from "./DataLayer/DataLayer";
import { useEffect } from "react";

function App() {
  const [{ name }] = useDataLayerValue();
  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Body />
      </div>
    </Router>
  );
}

export default App;
