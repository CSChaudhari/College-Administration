import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from "./components/Banner";
import Scholarship from './components/Scholarship';
import Concession from './components/Concession';
import Bonafite from './components/Bonafite';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/scholarship" element={<Scholarship />} />
          <Route path="/concession" element={<Concession />} />
          <Route path="/bonafite" element={<Bonafite />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
