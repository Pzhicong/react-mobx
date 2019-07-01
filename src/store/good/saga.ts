import { takeEvery } from "redux-saga/effects";
import { all } from "redux-saga/effects";
import { INSERT_GOOD } from ".";
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
function* incrementAsync() {
  yield delay(1000);
  console.log("hello");
}
// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
function* watchIncrementAsync() {
  yield takeEvery(INSERT_GOOD, incrementAsync);
}
export function* goodSaga() {
  yield all([watchIncrementAsync()]);
}
