import './App.css';
import Nav from './components/nav';
import Content from './components/content';
import React, { useRef } from 'react';

function App() {

  const iniRef = useRef(null);
  const skillsRef = useRef(null);
  const sobreRef = useRef(null);

  return (
    <div className="App">
      <Nav iniRef={iniRef} skillsRef={skillsRef} sobreRef={sobreRef} />
      <Content iniRef={iniRef} skillsRef={skillsRef} sobreRef={sobreRef} />
    </div>
  );
}

export default App;
