import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contactos from './pages/contactos';
import Servicios from "./pages/servicios";
import Team from "./pages/team";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home_about";
import Testimonio from "./pages/testimonios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/testimonios" element={<Testimonio />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
