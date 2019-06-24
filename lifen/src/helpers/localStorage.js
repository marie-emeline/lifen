import { Map, List, fromJS } from 'immutable';

const initialUploadState = Map({});


export const loadState = () => {
  try {
    const upload = JSON.parse(window.localStorage.getItem('binaries'));

    let uploadState = {};

    if (upload && upload.length > 0) {
      uploadState = initialUploadState.set('binarie', List(fromJS(upload)));
    }


    return {
      uploadState,
    };
  } catch (error) {
    // eslint-disable-next-line
    console.error(error);

    return {};
  }
};

export const saveState = state => {
  try {
    const upload = state
      .get('uploadState')
      .get('binaries')
      .toJS();

    window.localStorage.setItem('binaries', JSON.stringify(upload));

  } catch (error) {
    // eslint-disable-next-line
    console.error(error);
  }
};
