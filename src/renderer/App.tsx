import React from 'react';
import './App.css';
import { Button, Intent } from '@blueprintjs/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          SEEUS
        </p>
        <Button intent={Intent.SUCCESS} text="Close" onClick={window.close} />
      </header>
    </div>
  );
}

export default App;
