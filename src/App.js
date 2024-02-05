import React from 'react';
// for routing pages such as about, home, contact etc use react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';


// App is the main component that will be rendered in the root element
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/projects' exact element={<Projects />} />
          <Route path='/experience' exact element={<Experience />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;