import { all } from 'redux-saga/effects';

import uploadSagas from './UploadSagas';

export default function* rootSaga() {
  yield all([
    ...uploadSagas,
  ]);
}