import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Button } from "react-bootstrap";
import Input from "./Components/Input";
import { BrowserRouter, Route, Link ,Routes } from "react-router-dom";
import Output from "./Components/Output";

function App() {
  

  return (
    <div className="App">
      <Input/>
      <Output/>
    </div>
  );
}

export default App;
