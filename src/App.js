import React from 'react';
import { connect } from 'react-redux';

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar';
import Chat from './containers/Chat/Chat';
import Login from './components/Login/Login';
import Aux from './hoc/Auxiliary';

import './App.css'

function App({ isAuthenticated }) {

  console.log(isAuthenticated);

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
            <Route path="/rooms/:roomId">
              <Chat />
              {/* <Redirect to="/rooms/:roomId" /> */}
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
    isAuthenticated: state.auth.user !== null
  }
}

export default connect(mapStateToProps)(App);
