import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { NavBar } from './components/NavBar';
import { pages } from './utils/pages';

function App() {
    return (
        <div className="App">
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
