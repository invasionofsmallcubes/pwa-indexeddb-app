import './App.css';

import Main from './Main';
import React from 'react';
import ServiceWorkerUpdate from './ServiceWorkerUpdate';
import { useServiceWorker } from './ServiceWorkerProvider';

function App() {

  const { isUpdateAvailable, updateAssets } = useServiceWorker();

  return (
    <div className="App">
      <div className="App-header">
        <Main />
        <ServiceWorkerUpdate updateAssets={updateAssets} isUpdateAvailable={isUpdateAvailable} />
      </div>
    </div>
  );
}

export default App;