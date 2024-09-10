import React from 'react';
import Navbar from './components/Navbar';
import Front from './components/front';
import Sidebar from './components/sidebar';


function App() {
  console.log('App is loading'); // Add this line to check if App.js is loading

  return (
    <div className="App">
      <Navbar />
      <Sidebar/>
      <Front/>
    </div>
  );
}

export default App;
