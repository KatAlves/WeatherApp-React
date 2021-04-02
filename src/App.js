import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Clock from "./Clock";
import Form from "./Form";
import Location from "./Location";
import Temperature from "./Temperature";
import Footer from "./Footer";

export default function App() {
  return (
    <div class="container">
      <div className="weather-app">
        <Form />
        <div className="row">
          <div className="col-6">
            <Location />
          </div>
          <div className="col-6">
            <Clock />
            <br />
            <Temperature />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

