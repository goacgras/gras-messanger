import React, { useState, useEffect } from 'react'

import { Avatar } from '@material-ui/core';

import classes from './SidebarChat.module.css';

const SidebarChat = ({ addNewChat }) => {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const addNewChatHandler = () => {
        const roomName = prompt('please enter char name');

        if (roomName) {
            //do clever stuff here...
        }
    }


    return !addNewChat ? (
        <div className={classes.SidebarChat}>
            <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className={classes.Info}>
                <h2>Room name</h2>
                <p>Last message</p>
            </div>
        </div>
    ) : (
            <div
                className={classes.SidebarChat}
                onClick={addNewChatHandler}>

                <h2>Add new Chat</h2>
            </div>
        )
}

export default SidebarChat
