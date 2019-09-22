import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { pages } from './utils/pages';

import './styles/global.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                <NavBar pages={pages} />
                <Switch>
                    {pages.map(({ component, path }, key) => (
                        <Route path={path} component={component} key={key} />
                    ))}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
