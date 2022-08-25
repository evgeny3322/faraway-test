import React from 'react';
import {HashRouter} from 'react-router-dom';
import AppRouter from "./components/app-router/AppRouter";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
  return (
      <HashRouter>
          <Provider store={store}>
              <AppRouter/>
          </Provider>
      </HashRouter>
  );
}

export default App;
