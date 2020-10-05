import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import { NavLink } from 'react-router-dom'
import { Avatar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from '../../components/SidebarChat/SidebarChat';

import classes from './Sidebar.module.css';

const Sidebar = ({ onInitRooms, roomsRdx, userRdx }) => {

    useEffect(() => {
        onInitRooms();
    }, [onInitRooms]);

    return (
        <div className={classes.Sidebar}>
            <div className={classes.Header}>
                <Avatar src={userRdx?.photoURL} />
                <NavLink to="/logout">Logout</NavLink>
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
                    roomsRdx.map(room => (
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

const mapStateToProps = state => {
    return {
        roomsRdx: state.room.rooms,
        userRdx: state.auth.user
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onInitRooms: () => dispatch(actions.initRooms())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
