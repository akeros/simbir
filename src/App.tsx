import React from 'react';
import MainOne from './pages/MainOne';
import Main from './pages/Main';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

// import styles from './App.module.css';

const App = () => (
  <Router basename="/simbir">
      <Routes>
        <Route path="/" element={<Main />}>
        </Route>
        <Route path="/step-one" element={<MainOne />}>
        </Route>
      </Routes>
    </Router>
)

export default App;
