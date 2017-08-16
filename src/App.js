import React, { Component } from 'react';
import SimpleComponent from './higher-order-components/SimpleHoc';

class App extends Component {
  render() {
    return (
      <div>
        <SimpleComponent />
      </div>
    );
  }
}

export default App;
