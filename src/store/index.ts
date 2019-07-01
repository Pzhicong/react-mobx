import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import { composeWithDevTools } from "redux-devtools-extension";
import { goodReducer } from "./good";
import { goodSaga } from "./good/saga";

export const reducers = combineReducers({
  good: goodReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield all([goodSaga()]);
}

sagaMiddleware.run(rootSaga);

const state = store.getState();

export type GlobalState = typeof state;
