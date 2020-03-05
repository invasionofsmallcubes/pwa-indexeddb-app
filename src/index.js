import './index.css';

import * as serviceWorker from './serviceWorker';

import App from './App';
import { BrowserRouter } from "react-router-dom";
import CreateNote from './CreateNote';
import Main from './Main';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router'
import { ServiceWorkerProvider } from './ServiceWorkerProvider';

ReactDOM.render(
    <ServiceWorkerProvider>
        <BrowserRouter>
            <Route path='/notes/:noteId'
                render={props => {
                    const noteId = props.match.params.noteId;
                    return <App child={<CreateNote noteId={noteId} />
                    } />
                }} />
            <Route exact path='/'>
                <App child={<Main />} />
            </Route>
        </BrowserRouter>
    </ServiceWorkerProvider >,
    document.getElementById('root'));

serviceWorker.register();
