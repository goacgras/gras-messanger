import React, { useState } from 'react'

import Aux from '../../hoc/Auxiliary';
import { InsertEmoticon, Mic } from '@material-ui/icons';

import classes from './Chat.module.css';

const Chat = () => {
    let attachedClasses = [classes.Messages, classes.Reciever];
    const [input, setInput] = useState('');
    
    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you type >>>', input);

        setInput('');
    };

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
                    <input
                        onChange={e => setInput(e.target.value)}
                        value={input}
                        type="text" />
                    <button
                        onClick={sendMessage}
                        type="submit">
                        Send a message
                    </button>
                </form>
                <Mic />
            </div>
        </Aux>


    )
}

export default Chat
