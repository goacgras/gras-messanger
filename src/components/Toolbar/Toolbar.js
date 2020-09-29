import React from 'react'

import { Avatar } from '@material-ui/core'
import DrawerToggle from '../../components/SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.module.css';

const Toolbar = ({drawerToggleClicked}) => {
    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={drawerToggleClicked} />
            <Avatar />

            <div className={classes.RoomName}>
                <h3>Room Name</h3>
            </div>

        </header>

    )
}

export default Toolbar
