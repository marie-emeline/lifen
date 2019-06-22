import React, { Component } from 'react';

class Upload extends Component {
  render() {
    return (
      <input
        type="file"
        className="Upload"
        name="upload"
        id="upload"
        onChange={console.log("ok")}
      />
    )
  }
}

export default Upload; 