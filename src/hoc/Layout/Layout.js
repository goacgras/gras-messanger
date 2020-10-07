import React, { useState } from 'react'
import { connect } from 'react-redux'

import Aux from '../Auxiliary';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

import classes from './Layout.module.css';

const Layout = ({ children, roomsRdx, userRdx, roomNameRdx, roomImageRdx }) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const closeSideDrawerHandler = () => {
        setShowSideDrawer(false);
    };

    const drawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    };

    return (
        <Aux>
            <div className={classes.Layout}>
                <Toolbar
                    roomImage={roomImageRdx}
                    roomName={roomNameRdx}
                    drawerToggleClicked={drawerToggleHandler} />
                <SideDrawer
                    userPhoto={userRdx?.photoURL}
                    rooms={roomsRdx}
                    openSideDrawer={showSideDrawer}
                    closeSideDrawer={closeSideDrawerHandler} />
                <main className={classes.Chat}>
                    {children}
                </main>
            </div>
        </Aux>
    )
}

const mapStateToProps = state => {
    return {
        userRdx: state.auth.user,
        roomsRdx: state.room.rooms,
        roomNameRdx: state.chat.roomName,
        roomImageRdx: state.chat.roomImage
    }
};

export default connect(mapStateToProps)(Layout);
