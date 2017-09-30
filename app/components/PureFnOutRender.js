import React, { PureComponent } from 'react';

class PureWithFnOutOfRenderMethod extends PureComponent {
  refElement = (e) => { this.element = e; };

  render() {
    return (
      <div ref={this.refElement}>
        React test component 5!
      </div>);
  }
}

export default PureWithFnOutOfRenderMethod;
