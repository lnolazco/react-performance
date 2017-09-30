import React, { PureComponent } from 'react';

class PureWithFnInRenderMethod extends PureComponent {
  render() {
    return (
      <div ref={(ref) => { this.element = ref; }}>
        React test component 4!
      </div>);
  }
}

export default PureWithFnInRenderMethod;
