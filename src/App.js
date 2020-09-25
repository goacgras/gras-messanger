import React from 'react';

import Layout from './hoc/Layout/Layout';
import Sidebar from './containers/Sidebar/Sidebar';
import Chat from './containers/Chat/Chat';

import './App.css'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Layout>
          <Chat />
        </Layout>
      </div>
    </div>


  );
}

export default App;
