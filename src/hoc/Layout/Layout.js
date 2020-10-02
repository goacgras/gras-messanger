import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import db from '../../firebase';
import Aux from '../Auxiliary';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

import classes from './Layout.module.css';
import { useParams } from 'react-router-dom';

const Layout = ({ children, roomsRdx, userRdx }) => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);
    const [roomName, setRoomName] = useState('');
    const { roomId } = useParams();

    console.log(roomsRdx)

    const closeSideDrawerHandler = () => {
        setShowSideDrawer(false);
    };

    const drawerToggleHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    };

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomName(snapshot.data().name)
                ))
        }
    }, [roomId]);


    return (
        <Aux>
            <div className={classes.Layout}>
                <Toolbar
                    roomName={roomName}
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
        roomsRdx: state.room.rooms
    }
};

export default connect(mapStateToProps)(Layout);
