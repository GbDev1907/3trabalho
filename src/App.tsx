import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LivroLista from './LivroLista';
import { LivroDados }  from './LivroDados';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-custom">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Home</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/catalogo">Catálogo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/novo">Novo</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/catalogo" element={<LivroLista />} />
        <Route path="/novo" element={<LivroDados />} />
      </Routes>
    </Router>
  );
};

export default App;