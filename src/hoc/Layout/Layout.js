import React from 'react'

import Aux from '../Auxiliary';
import Toolbar from '../../components/Toolbar/Toolbar';

import classes from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <Aux>
            <div className={classes.Layout}>
                <Toolbar />
                <main className={classes.Chat}>
                    {children}
                </main>
            </div>
        </Aux>
    )
}

export default Layout
