import React from 'react';
import Sidebar from './components/Sidebar';
import PageContainer from './components/PageContainer';

import './App.css';

function App() {
  //TODO: Try adding routes with react-dom-router
  return (
    <div className="App">
      <Sidebar/>
      <PageContainer/>
    </div>
  );
}

export default App;
