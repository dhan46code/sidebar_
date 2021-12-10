import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Component/Home';
import Sidebar from './Component/Sidebar';
import { AppProvider } from './Component/context';
import './global.css';

function App() {
  return (
    <>
      <AppProvider>
        <Home />
        <Sidebar />
      </AppProvider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
