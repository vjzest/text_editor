import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  link
} from "react-router-dom";*/

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
    }
  };
  return (
    <>
      <Navbar title="Textutiles" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
       {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
          </Route>
        </Switch>*/}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
    </>
  );
}

export default App;
