import { useState} from "react";
import "../src/App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from './components/Navbar';
import TextForm from "./components/TextForm";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

 function showAlert(message, type){
    setAlert({
    msg: message,
    type: type
    })      
    setTimeout(() => {
      setAlert()
    }, 2000);
 }

  function toggleMode(){
 if(mode==="dark"){
  setMode("light")
  document.body.style.backgroundColor="white"
  showAlert("Light Mode Enabled", "success")
 }
 else{
  setMode("dark")
  document.body.style.backgroundColor="black"
  showAlert("Dark Mode Enabled", "success")
 }
}

  return (
    
    <>
    <Router>
    <Navbar title="TeXtUtiLs" home="Home" about="About" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container mb-3" >
    <Routes>
          <Route exact path="/about" element={  <About mode={mode} />}>
          </Route>
          <Route exact path="/" element={<TextForm containerhead="TextBox" showAlert={showAlert}previewheading="Preview" counterheading="Specs" mode={mode}/>}>
          </Route>
        </Routes>
    
    </div>
    </Router>
    </>

  );
}

export default App;
