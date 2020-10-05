import React from 'react'
import { NavLink } from 'react-router-dom';

import { Avatar } from '@material-ui/core';
import Aux from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import SidebarChat from '../SidebarChat/SidebarChat';

import classes from './SideDrawer.module.css';

const SideDrawer = ({ openSideDrawer, closeSideDrawer, rooms, userPhoto }) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (openSideDrawer) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={openSideDrawer} clicked={closeSideDrawer} />
            <div className={attachedClasses.join(' ')} onClick={closeSideDrawer}>
                <div className={classes.Header}>
                    <Avatar src={userPhoto} />
                    <NavLink to="/logout">Logout</NavLink>
                </div>

                <div className={classes.Rooms}>
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

        </Aux>
    )
}

export default SideDrawer
