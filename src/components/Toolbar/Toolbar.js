import React from 'react'

import { Avatar } from '@material-ui/core'
import DrawerToggle from '../../components/SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.module.css';

const Toolbar = ({ drawerToggleClicked, roomName, roomImage }) => {

    return (
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={drawerToggleClicked} />
            <Avatar src={roomImage} />

            <div className={classes.RoomName}>
                <h3>{roomName}</h3>
            </div>

        </header>

    )
}

export default Toolbar
