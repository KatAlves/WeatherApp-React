import './App.css';
import React from "react";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Weather city="Lisbon"/>
      </header>
    </div>
  );
}

export default App;
