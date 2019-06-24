import { put, call, takeLatest } from 'redux-saga/effects';
import * as UploadAPI from '../api/Upload';

import {
  FETCH_UPLOAD__REQUEST,
  FETCH_UPLOAD__SUCCESS,
  FETCH_UPLOAD__FAIL,
} from '../actions/Upload';

function* fetchUpload({ payload }) {
    console.log(payload);
  try {
    const data = yield call(
      UploadAPI.fetchUpload,
      payload,
    );

    yield put({
      type: FETCH_UPLOAD__SUCCESS,
      payload: { id: payload, data },
    });
  } catch (e) {
    yield put({
      type: FETCH_UPLOAD__FAIL,
      payload: e.error,
    });
  }
}

const uploadSagas = [
    takeLatest(
      FETCH_UPLOAD__REQUEST,
      fetchUpload,
    ),
  ];


export default uploadSagas;
