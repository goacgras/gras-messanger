import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import * as actions from './store/actions/index';

import Layout from './hoc/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar';
import Chat from './containers/Chat/Chat';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import Aux from './hoc/Auxiliary';

import './App.css'

function App({ isAuthenticated, onTryAutoSignup }) {

  console.log(isAuthenticated);

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  let routes = (
    <Switch>
      <Route path="/" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Aux>
        <Sidebar />
        <Layout>
          <Switch>
            <Route path="/logout" component={Logout} />
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
          </Switch>
        </Layout>
      </Aux>
    );
  }


  return (
    <div className="app">
      <div className="app__body">
        {routes}
      </div>
    </div>


  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => { dispatch(actions.authCheckState()) }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
