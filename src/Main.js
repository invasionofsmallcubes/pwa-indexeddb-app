import ExternalLink from './ExternalLink';
import React from 'react';

function Main() {
    return (
        <header>
            <p>Hello, welcome to <strong>pwa-indexeddb-app</strong></p>
            <p>It's a simple experiment to see if <ExternalLink link="https://web.dev/progressive-web-apps/" name="Progressive Web Apps" /> and <ExternalLink link="https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API" name="IndexedDb" /> work together.</p>
        </header>
    );
}

export default Main;