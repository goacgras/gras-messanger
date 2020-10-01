import React from 'react'

import Aux from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';
import SidebarChat from '../SidebarChat/SidebarChat';

import classes from './SideDrawer.module.css';

const SideDrawer = ({ openSideDrawer, closeSideDrawer, rooms }) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (openSideDrawer) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={openSideDrawer} clicked={closeSideDrawer} />
            <div className={attachedClasses.join(' ')}>
                {
                    rooms.map(room => (
                        <SidebarChat
                            key={room.id}
                            id={room.id}
                            name={room.data.name} />
                    ))
                }
            </div>

        </Aux>
    )
}

export default SideDrawer
