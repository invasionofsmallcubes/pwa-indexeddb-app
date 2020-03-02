import * as serviceWorker from './serviceWorker';

import React from 'react';

const ServiceWorkerContext = React.createContext();

export const ServiceWorkerProvider = ({ children }) => {
    const [waitingServiceWorker, setWaitingServiceWorker] = React.useState(null);
    const [isUpdateAvailable, setUpdateAvailable] = React.useState(false);

    React.useEffect(() => {
        serviceWorker.register({
            onUpdate: registration => {
                setWaitingServiceWorker(registration.waiting);
                setUpdateAvailable(true);
            }
        });
    }, []);

    React.useEffect(() => {
        // We setup an event listener to automatically reload the page
        // after the Service Worker has been updated, this will trigger
        // on all the open tabs of our application, so that we don't leave
        // any tab in an incosistent state
        if (waitingServiceWorker) {
            waitingServiceWorker.addEventListener('statechange', event => {
                if (event.target.state === 'activated') {
                    window.location.reload();
                }
            });
        }
    }, [waitingServiceWorker]);

    const value = React.useMemo(() => ({
        isUpdateAvailable,
        updateAssets: () => {
            if (waitingServiceWorker) {
                console.log("sending SKIP WAITING");
                waitingServiceWorker.postMessage({ type: 'SKIP_WAITING' });
            }
        }
    }), [isUpdateAvailable, waitingServiceWorker]);

    return (
        <ServiceWorkerContext.Provider value={value}>
            {children}
        </ServiceWorkerContext.Provider>
    );
}

// With this React Hook we'll be able to access `isUpdateAvailable` and `updateAssets`
export const useServiceWorker = () => {
    return React.useContext(ServiceWorkerContext);
}