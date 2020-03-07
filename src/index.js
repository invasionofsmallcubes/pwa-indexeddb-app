import './index.css';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch } from "react-router-dom";

import App from './App';
import CreateNote from './CreateNote';
import Main from './Main';
import NoteRepository from './NoteRepository';
import React from 'react';
import ReactDOM from 'react-dom';
import ReadNote from './ReadNote';
import { Route } from 'react-router';
import { ServiceWorkerProvider } from './ServiceWorkerProvider';

const noteRepository = NoteRepository();

ReactDOM.render(
    <ServiceWorkerProvider>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/notes/new' render={routeProps => <App {...routeProps} child={<CreateNote {...routeProps} noteRepository={noteRepository} />} />}>
                </Route>
                <Route path='/notes/:noteId'
                    render={routeProps => {
                        const noteId = routeProps.match.params.noteId;
                        let note = undefined;
                        if (routeProps.location.state) { note = routeProps.location.state.note; }
                        return <App {...routeProps}
                            child={<ReadNote {...routeProps}
                                noteId={noteId} note={note} noteRepository={noteRepository} />} />
                    }} />
                <Route exact path='/' render={props => <App child={<Main {...props} />} />}>
                </Route>
            </Switch>
        </BrowserRouter>
    </ServiceWorkerProvider >,
    document.getElementById('root'));

serviceWorker.register();
