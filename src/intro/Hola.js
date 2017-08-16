import React, { Component } from 'react';

class Hola extends Component {
  render() {
    return (
      <h1>
        {this.props.nombre === 'César'
          ? `Ave ${this.props.nombre}`
          : this.props.nombre}
      </h1>
    );
  }
}

export default Hola;
