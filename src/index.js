import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { ServiceWorkerProvider } from './ServiceWorkerProvider';

ReactDOM.render(<ServiceWorkerProvider><App /></ServiceWorkerProvider>, document.getElementById('root'));

serviceWorker.register();
