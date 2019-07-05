import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import PageContainer from './components/PageContainer';

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
