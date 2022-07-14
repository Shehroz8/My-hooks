import './App.css';
import React, { useState } from 'react';
import { usePrevious } from './hook/usePrevious';
import { useLocalStorage } from './hook/useLocalStorage';

function App() {
  const [count, setCount] = useLocalStorage(0, 'count');
  const prevCount = usePrevious(count);
  return (
    <div className="App">
      <h1>usePrevious</h1>
      <p>Current: {count}</p>
      <p>Previous: {count}</p>
      <button onClick={()=>setCount(count + 1)}>click</button>
    </div>
  );
}

export default App;
