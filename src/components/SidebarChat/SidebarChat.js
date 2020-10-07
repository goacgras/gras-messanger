import React from 'react';
import { Link } from 'react-router-dom';
import db from '../../firebase';

import { Avatar } from '@material-ui/core';

import classes from './SidebarChat.module.css';

const SidebarChat = ({ addNewChat, id, name, roomImage }) => {

    const addNewChatHandler = () => {
        const roomName = prompt('please name your chat room');

        if (roomName) {
            db.collection('rooms').add({
                name: roomName,
            });
        }
    }


    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className={classes.SidebarChat}>
                <Avatar src={roomImage} />
                <div className={classes.Info}>
                    <h2>{name}</h2>
                    <p>Last message</p>
                </div>
            </div>
        </Link>

    ) : (
            <div
                className={classes.SidebarChat}
                onClick={addNewChatHandler}>

                <h2>Add new Chat</h2>
            </div>
        )
}

export default SidebarChat
