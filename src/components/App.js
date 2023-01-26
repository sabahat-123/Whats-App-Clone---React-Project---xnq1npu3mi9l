import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';


function App() {
  return (
    <Router>
    <div className="App">
    <div className="app__body">
    <Sidebar/>
    <Routes>
    <Route exact path="/" element={<Chat/>} />
    <Route  path="/room/:roomId" element={<Chat/>} />
    </Routes> 
    </div>
    </div>
    </Router> 
  );
}

export default App;
