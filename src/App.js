import React from "react";
import store from './store'
import { Provider } from 'react-redux';
import { GiftList, SearchBar } from './components';

function App() {
  return (
    <Provider store={store}>
        <div style={{"text-align": "center"}}>
          <SearchBar />
          <GiftList />
        </div>
    </Provider>
  );
}

export default App;
