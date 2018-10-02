import * as React from 'react';
import { Routes } from './Routes';
import { ApiModelImpl } from './ApiModelImpl';
const dynamicApiModel = require('./apiModel.json');

class App extends React.Component {
  apiModel = ApiModelImpl;

  render() {
    return (
      <div>
        <Routes apiModel={dynamicApiModel}/>
      </div>
    );
  }
}

export default App;
