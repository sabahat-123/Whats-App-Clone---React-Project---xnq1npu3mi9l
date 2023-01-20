import React from 'react'
import '../styles/App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
const App = () => {


  return (
    <div id="main">
      <div className='body_app'>
        {/* sidebar */}
        <Sidebar/>
        
        {/* chatbar */}
        <Chat/>
      </div>
    </div>
  )
}


export default App;
