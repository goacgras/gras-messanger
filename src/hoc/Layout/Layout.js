import React from 'react'

import Aux from '../Auxiliary';

// import classes from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <Aux>
            <p>This is layout</p>
            <main>
                {children}
            </main>
        </Aux>
    )
}

export default Layout
