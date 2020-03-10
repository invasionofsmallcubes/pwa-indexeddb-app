import './index.css';

import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Switch } from "react-router-dom";

import App from './App';
import CreateTodo from './CreateTodo';
import Main from './Main';
import React from 'react';
import ReactDOM from 'react-dom';
import ReadTodo from './ReadTodo';
import { Route } from 'react-router';
import { ServiceWorkerProvider } from './ServiceWorkerProvider';
import TodoRepository from './TodoRepository';

const todoRepository = TodoRepository();

ReactDOM.render(
    <ServiceWorkerProvider>
        <BrowserRouter>
            <Switch>
                <Route exact={true} path='/todos/new' render={routeProps => <App {...routeProps} child={<CreateTodo {...routeProps} todoRepository={todoRepository} />} />}>
                </Route>
                <Route path='/todos/:todoId'
                    render={routeProps => {
                        const todoId = routeProps.match.params.todoId;
                        let todo = undefined;
                        if (routeProps.location.state) { todo = routeProps.location.state.todo; }
                        return <App {...routeProps}
                            child={<ReadTodo {...routeProps}
                                todoId={todoId} todo={todo} todoRepository={todoRepository} />} />
                    }} />
                <Route exact path='/' render={props => <App child={<Main {...props} />} />}>
                </Route>
            </Switch>
        </BrowserRouter>
    </ServiceWorkerProvider >,
    document.getElementById('root'));

serviceWorker.register();
