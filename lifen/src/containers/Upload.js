import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  fetchUpload
} from '../api/Upload';

import '../styles/Upload.css';
import spinner from '../assets/spinner.svg'


class Upload extends Component {

  state = {
    error: false,
    binaries: null,
    loading: false,
    file: null,
  }

  numberBinaries = () => {
    this.setState({ loading: true });
    fetch(`http://hapi.fhir.org/baseDstu3/Binary`, {
      accept: 'application/json'
    })
    .then((response) => (
      response.json()
    ))
    .then((binaries) => {
      this.setState({ binaries: binaries, loading: false})
    })
    .catch((err) => {
      this.setState({ loading: false });
    })
  };

  handleUpload = (e)  => {

    if (e.target.files[0]) {
            try {

        this.setState({ file: e.target.files[0] })

        fetchUpload(e.target.files[0]);

        this.numberBinaries();

      } catch (e) {

        this.setState({
          error:
            'Le document n’a pas pu être téléchargé, merci de réessayer.',
        });
      }

    }  
  }

  render() {
    const { binaries, file, loading } = this.state;
    return (
      <div className="Upload">
        <div>
          <div className="Upload__actions">
          <div className="Upload__action">
            <label
              className="Upload__input"
              htmlFor="document"
            >

              {file && file.name && (
                <span className="Upload__file-name">
                  {file.name}
                </span>
              )}
              
              <span className="Upload__button">
                <span className="Upload__button-label">
                  {file && file.name ? file.name : "Parcourir"}
                </span>
              </span>
            </label>
            <div className="Upload__settings">
              <div className="Upload__formats">
                Formats de fichiers autorisé: PDF
              </div>
              <div className="Upload__size">
                Taille maximale du fichier : 2Mo
              </div>
              {loading ? 
                (
                  <img className="Upload-spinner" src={spinner} />
                )
                :
                (
                  <div>
                    {binaries && binaries.entry &&
                    <div className="Upload-number-binaries">
                      Nombre total de fichier(s) téléchargé(s) : { binaries.entry.length}
                    </div>
                    }
                  </div>
                )
              }
              
            </div>
          </div>
          <input
            type="file"
            className="Upload__input-field"
            name="document"
            id="document"
            accept="application/pdf"
            onChange={(e) => this.handleUpload(e)}
          />          
        </div>
        </div>

      </div>
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