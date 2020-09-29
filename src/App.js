import React from 'react';

import { Switch, Route } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar';
import Chat from './containers/Chat/Chat';
// import Login from './components/Login/Login';

import './App.css'

function App() {

  // let route1 = (  
  //   <Switch>
  //     <Route path="/" component={Login} />
  //   </Switch>
  // );

  // let route2 = (

  // );

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />


        <Layout>
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Login</h1>
            </Route>
          </Switch>
        </Layout>

      </div>
    </div>


  );
}

export default App;
