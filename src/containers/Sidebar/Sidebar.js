import React, { useEffect, useState } from 'react'
import db from '../../firebase';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import { Avatar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from '../../components/SidebarChat/SidebarChat';

import classes from './Sidebar.module.css';

const Sidebar = ({onSetRooms}) => {
    const [rooms, setRooms] = useState([]);
    
    useEffect(() => {
        const unsubscribe =  db.collection('rooms').onSnapshot(snaphot => (
            setRooms(snaphot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )))
        ))
                
        return () => {
            unsubscribe();
        }
    }, []);

    useEffect(() => {
        // console.log(rooms);
        onSetRooms(rooms);
    },[onSetRooms, rooms]);

    return (
        <div className={classes.Sidebar}>
            <div className={classes.Header}>
                <Avatar />
            </div>

            <div className={classes.Search}>
                <div className={classes.SearchContainer}>
                    <SearchOutlined />
                    <input
                        placeholder="Search or start new chat"
                        type="text" />
                </div>
            </div>

            <div className={classes.Chat}>
                <SidebarChat addNewChat />
                {
                    rooms.map(room => (
                        <SidebarChat
                            key={room.id}
                            id={room.id}
                            name={room.data.name} />
                    ))
                }
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onSetRooms: (rooms) => dispatch(actions.setRooms(rooms))
    };
}

export default connect(null, mapDispatchToProps)(Sidebar);
