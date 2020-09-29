import React from 'react'

import { Avatar } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons'
import SidebarChat from '../../components/SidebarChat/SidebarChat';

import classes from './Sidebar.module.css';

const Sidebar = () => {
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
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
