import React from 'react'

import Aux from '../../hoc/Auxiliary';
import { InsertEmoticon, Mic } from '@material-ui/icons';

import classes from './Chat.module.css';

const Chat = () => {
    let attachedClasses = [classes.Messages, classes.Reciever];
    return (
        <Aux>
            <div className={classes.Chat}>
                <p className={attachedClasses.join(' ')}>
                    <span className={classes.Name}>Fachreza</span>
                hey guys
                <span className={classes.Timestamp}>4:56pm</span>
                </p>
            </div>

            <div className={classes.Footer}>
                <InsertEmoticon />
                <form>
                    <input type="text" />
                    <button>Send a message</button>
                </form>
                <Mic />
            </div>
        </Aux>


    )
}

export default Chat
