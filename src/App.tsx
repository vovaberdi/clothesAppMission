
import axios from 'axios';
import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import './App.css';
import Header from './Components/LayoutArea/Header/Header';
import Main from './Components/LayoutArea/Main/Main';
import store from './store/store';


function App() {
 

  return (
    <div className="App">
      <Provider store={store}>
         <header><Header/></header>
         <h1>My Clothes</h1>
         <main><Main/></main>
      </Provider>
    </div>
  );
}

export default App;
