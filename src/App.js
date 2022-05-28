import React from 'react';
import { Provider } from "react-redux";

import store from './store/index';

import "./App.css";
import Todo from './Todo';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <Todo />
      </Provider>
    </>
  )
}

export default App