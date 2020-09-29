import React from 'react'

import { Avatar } from '@material-ui/core'


import classes from './Toolbar.module.css';

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <div>
                Menu
            </div>

            <Avatar />

            <div className={classes.RoomName}>
                <h3>Room Name</h3>
            </div>

        </header>

    )
}

export default Toolbar
