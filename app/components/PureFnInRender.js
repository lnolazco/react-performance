import React, { PureComponent } from 'react';

class PureFnInRender extends PureComponent {
  render() {
    return (
      <div ref={(ref) => { this.element = ref; }}>
        Hello: Pure component with function in render
      </div>);
  }
}

export default PureFnInRender;
