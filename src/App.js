import React, { useState } from 'react';

import { Switch, Route, Redirect } from 'react-router-dom'


import Layout from './hoc/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar';
import Chat from './containers/Chat/Chat';
import Login from './components/Login/Login';
import Aux from './hoc/Auxiliary';

import './App.css'

function App() {
  const [user, setUser] = useState('reza');

  let routes = (
    <Switch>
      <Route path="/" exact component={Login} />
      <Redirect to="/" />
    </Switch>
  );

  if (user) {
    routes = (
      <Aux>
        <Sidebar />
        <Switch>

          <Route path="/rooms/:roomId" exact>
            <Layout>
              <Chat />
            </Layout>
            {/* <Redirect to="/rooms/:roomId" /> */}
          </Route>

        </Switch>
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

export default App;
