import React from 'react';
import './App.css';
import { PrimaryButton } from '@fluentui/react/lib/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          SEEUS
        </p>
        <PrimaryButton onClick={() => window.close()}>Close Window</PrimaryButton>
      </header>
    </div>
  );
}

export default App;
