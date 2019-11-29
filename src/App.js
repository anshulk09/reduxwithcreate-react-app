import React from 'react';
import './App.css';
import NewComp from './components/NewComp';
import store from './redux/reduxcomps';
import { Provider } from 'react-redux';

function App() {
  console.log(store.getState())

  return (
    <Provider store={store}>
      <NewComp />
    </Provider>
  );
}

export default App;
