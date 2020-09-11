import React, { Component } from 'react';
import './App.scss';
import CanvasContainer from './components/CanvasContainer';
import FileUpload from './components/FileUpload';

class App extends Component {

  render() {
    return (
      <div>
        {/* <CanvasContainer /> */}
        <FileUpload />
      </div>
    );
  }
}


export default App;
