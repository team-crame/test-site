import React from 'react';

import { NavLink } from 'react-router-dom';

import Styles from './NavBar.module.scss';

export function NavBar({ pages }) {
    return (
        <nav>
            {pages.map(({ path, linkName }, key) => (
                <NavLink
                    className={Styles.link}
                    to={path}
                    key={key}
                    activeClassName={Styles.active}
                >
                    {linkName}
                </NavLink>
            ))}
        </nav>
    );
}
