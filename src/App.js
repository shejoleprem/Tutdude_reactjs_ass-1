import React from 'react';
import './App.css';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';
function App() {
  return (
     <div className="app-container">
            <h1>Assignment-2 Counter Application</h1>
            <div className="counters">
                <ClassCounter />
                <FunctionCounter />
            </div>
        </div>
  );
}

export default App;
