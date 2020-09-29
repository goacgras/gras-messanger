import React, { useState } from 'react'

import Aux from '../Auxiliary';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

const Layout = ({ children }) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const closeSideDrawerHandler = () => {
        setShowSideDrawer(false);
    };

    const drawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    };

    return (
        <Aux>
            <div className={classes.Layout}>
                <Toolbar drawerToggleClicked={drawerToggleHandler} />
                <SideDrawer
                    openSideDrawer={showSideDrawer}
                    closeSideDrawer={closeSideDrawerHandler} />
                <main className={classes.Chat}>
                    {children}
                </main>
            </div>
        </Aux>
    )
}

export default Layout
