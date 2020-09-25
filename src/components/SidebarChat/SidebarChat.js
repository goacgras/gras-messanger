import React, { useState, useEffect } from 'react'

import { Avatar } from '@material-ui/core';

import classes from './SidebarChat.module.css';

const SidebarChat = () => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return (
        <div className={classes.SidebarChat}>
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className={classes.Info}>
                <h2>Room name</h2>
                <p>Last message</p>
            </div>
        </div>
    )
}

export default SidebarChat
