import { Map, fromJS, OrderedMap } from 'immutable';

import {
  FETCH_UPLOAD__REQUEST,
  FETCH_UPLOAD__SUCCESS,
  FETCH_UPLOAD__FAIL,
} from '../actions/UploadActions';

const initialState = Map({
  binaries: Map({}),
  loading: false,
});

const uploadState = (
  state = initialState,
  { type, payload },
) => {

  switch (type) {
    case FETCH_UPLOAD__REQUEST:
      return state.set('loading', true);

    case FETCH_UPLOAD__SUCCESS:
      return state
        .set('loading', false)
        .setIn(['binaries', payload.id], fromJS(payload.data));

    case FETCH_UPLOAD__FAIL:
      return state.set('loading', false);

    default:
      return initialState.merge(state);
  }
};

export default uploadState;
