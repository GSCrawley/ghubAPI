import React from 'react'
import NewGist from "./components/NewGist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { loadState, saveState } from './local_storage';
// import { configureStore } from '@reduxjs/toolkit'
// import { rootReducer } from './reducers'
// import { Provider } from 'react-redux' 

import './App.css';
import GistList from './components/GistList';

// const persistedState = loadState();
// const store = configureStore({
//     persistedState,
//     reducer: {
//         rootReducer
//     }
// });

// store.subscribe(() => {
//   saveState({
//       Notepad: store.getState().Notepad
//     });
// })

function App() {
  // const [data, setData] = useState([])
    return (
      // <Provider store={store}>

            <div className="container">
                
                <BrowserRouter>
                <Routes>
                   
                    <Route path="/" element = {<NewGist />} />
                    <Route path="/" element = {<GistList />} />
                </Routes>
                </BrowserRouter>
            </div>                                                 

    );
}


export default App;
