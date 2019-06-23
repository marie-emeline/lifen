import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  fetchUpload
} from '../api/Upload';

class Upload extends Component {

  state = {
    error: false

  }
  handleUpload = (e)  => {
    console.log(e.target.files);

    if (e.target.files[0]) {

      try {

        fetchUpload(e.target.files[0]);

      } catch (e) {
        this.setState({
          error:
            'Le document n’a pas pu être téléchargé, merci de réessayer.',
        });
      }

      this.setState({ saving: false });
    }  
  }

  render() {
    return (
      <input
        type="file"
        className="Upload"
        name="upload"
        id="upload"
        onChange={(e) => this.handleUpload(e)}
      />
    )
  }
}

Upload.defaultProp = {
  fetchUpload: null,
};

Upload.propTypes = {
  fetchUpload: PropTypes.func,
};

export default Upload; 