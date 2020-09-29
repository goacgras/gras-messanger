import React from 'react'

import Aux from '../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

import classes from './SideDrawer.module.css';

const SideDrawer = ({openSideDrawer, closeSideDrawer}) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(openSideDrawer) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={openSideDrawer} clicked={closeSideDrawer} />
            <div className={attachedClasses.join(' ')}>
                <h3>Side Drawer</h3>
            </div>

        </Aux>
    )
}

export default SideDrawer
