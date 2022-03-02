import { createStore, applyMiddleware, Store } from "redux";
import reduxSaga from "redux-saga";

import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = reduxSaga();

const reduxStorage = (injectReducer: any = {}): Store => {
  const storage = createStore(reducers(injectReducer), applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return storage;
};

export default reduxStorage;
