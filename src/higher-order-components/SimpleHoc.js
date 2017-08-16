import React from 'react';

const SimpleComponent = ({ injectedProp }) =>
  <h1>
    Hello {injectedProp}
  </h1>;

const withInjectedProp = (WrappedComponent, prop) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent injectedProp={prop + ' from HOC'} />;
    }
  };
};

const SimpleComponentWithInjectedProp = withInjectedProp(
  SimpleComponent,
  'world'
);
export default SimpleComponentWithInjectedProp;
