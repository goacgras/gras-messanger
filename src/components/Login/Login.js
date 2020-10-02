import React from 'react'
import { connect } from 'react-redux';
import { Button } from '@material-ui/core'

import * as actions from '../../store/actions/index';
import classes from './Login.module.css';

const Login = ({ onUserSignin }) => {

    const signIn = () => {
        onUserSignin();
    };

    return (
        <div className={classes.Login}>
            <div className={classes.Container}>

                <div className={classes.Text}>
                    <h1>Sign in to Gras</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in with google
                </Button>

            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onUserSignin: () => dispatch(actions.userSignin())
    };
};

export default connect(null, mapDispatchToProps)(Login);
