import './App.css';

import React from 'react';
import ServiceWorkerUpdate from './ServiceWorkerUpdate';
import { useServiceWorker } from './ServiceWorkerProvider';

function App(props) {

  const { isUpdateAvailable, updateAssets } = useServiceWorker();

  return (
    <div className="body">
      {props.child}
      <ServiceWorkerUpdate updateAssets={updateAssets} isUpdateAvailable={isUpdateAvailable} />
    </div>
  );
}

export default App;