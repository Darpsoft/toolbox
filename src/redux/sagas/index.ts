import { all } from "redux-saga/effects";
import auth from "./auth";
import carousel from "./carousel";

export default function* rootSaga() {
  yield all([auth(), carousel()]);
}
