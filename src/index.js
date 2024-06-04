import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { composeWithDevTools } from "@redux-devtools/extension";
import logger from "redux-logger";
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from './App';
import './index.css';
import './App.css';

import rootReducer from "./reducers";

const enhancer =
  process.env.NODE_ENV === "production"
    ? compose(applyMiddleware())
    : composeWithDevTools(applyMiddleware(logger));

// 위에서 만든 reducer를 store 만들때 넣어준다.
const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RecoilRoot>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RecoilRoot>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();