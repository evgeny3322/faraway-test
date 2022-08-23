import React from 'react';
import './App.css';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import AppRouter from "./components/app-router/AppRouter";

function App() {
  return (
      <HashRouter>
          <AppRouter/>
      </HashRouter>
  );
}

export default App;
