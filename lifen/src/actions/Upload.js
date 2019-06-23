export const FETCH_UPLOAD__REQUEST =
  '@@APP/FETCH_UPLOAD__REQUEST';
export const FETCH_UPLOAD__SUCCESS =
'@@APP/SUCCESS';
export const FETCH_UPLOAD__FAIL =
'@@APP/FETCH_UPLOAD__FAIL';


export const fetchUpload = () => ({
  type: FETCH_UPLOAD__REQUEST,
  payload: null,
});