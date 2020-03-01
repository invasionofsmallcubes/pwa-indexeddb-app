import React from 'react';
import './App.css';
import ExternalLink from './ExternalLink';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, welcome to <strong>pwa-indexeddb-app</strong> 4.
        </p>
        <p>It's a simple experiment to see if <ExternalLink link="https://web.dev/progressive-web-apps/" name="Progressive Web Apps" /> and <ExternalLink link="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" name="IndexedDb" /> work together.</p>
      </header>
      
    </div>
  );
}

export default App;