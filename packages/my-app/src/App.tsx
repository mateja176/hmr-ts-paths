import { capitalize } from 'format';
import React from 'react';
import './App.css';

const App: React.FC = () => {
  return <div className="App">{capitalize('react')}</div>;
};

export default App;
