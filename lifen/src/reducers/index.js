import { Record } from 'immutable';
import { combineReducers } from 'redux-immutable';

import uploadReducer from './UploadReducer.js';

const StateRecord = Record({
  uploadState: undefined,
});

const rootReducer = history =>
  combineReducers(
    {
      uploadState: uploadReducer,
    },
    StateRecord,
  );

export default rootReducer;