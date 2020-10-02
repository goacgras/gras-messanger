import React, { useState, useEffect } from 'react'
import db from '../../firebase';
import firebase from 'firebase';
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actions from '../../store/actions/index';

import Aux from '../../hoc/Auxiliary';
import { InsertEmoticon, Mic } from '@material-ui/icons';

import classes from './Chat.module.css';
import './chatExtra.css';


const Chat = ({ onInitMessages, messagesRdx, userRdx }) => {
    const [input, setInput] = useState('');
    const { roomId } = useParams();

    console.log(userRdx);
    // let attachedClasses = [classes.Messages, classes.Reciever];

    useEffect(() => {
        if (roomId) {
            onInitMessages(roomId);
        }
    }, [roomId, onInitMessages]);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log('you type >>>', input);

        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .add({
                message: input,
                name: userRdx.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })

        setInput('');
    };
    // className={attachedClasses.join(' ')}

    return (
        <Aux>
            <div className={classes.Chat}>
                {
                    messagesRdx.map(message => (
                        <p
                            key={message.timestamp}
                            className={`chat__message ${message.name === userRdx.displayName && "chat__reciever"}`}>

                            <span className={classes.Name}>{message.name}</span>
                            {message.message}
                            <span
                                className={classes.Timestamp}>
                                {new Date(message.timestamp?.toDate()).toUTCString()}
                            </span>
                        </p>
                    ))
                }

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

const mapStateToProps = state => {
    return {
        messagesRdx: state.chat.messages,
        userRdx: state.auth.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInitMessages: (roomId) => dispatch(actions.initMessages(roomId)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
