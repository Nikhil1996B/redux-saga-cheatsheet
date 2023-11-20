import { createRoot } from "react-dom/client";
import axios from "axios";
import App from "./components/App";
import reducers from "./reducers";
import { applyMiddleware, legacy_createStore } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
axios.defaults.baseURL = "https://vnv788-3001.csb.app";
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const store = legacy_createStore(reducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
