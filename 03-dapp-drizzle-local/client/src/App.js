import React from 'react';
import drizzleOptions from './drizzleOptions.js';

function App() {

  return (
    <DrizzleProvider options = {drizzleOptions}>
      <h1>Storage Dapp</h1> 
    </DrizzleProvider>
  );
}

export default App;
