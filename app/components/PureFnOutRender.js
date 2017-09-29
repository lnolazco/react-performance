import React, { PureComponent } from 'react';

class PureFnOutRender extends PureComponent {
  refElement = (e) => { this.element = e; };

  render() {
    return (
      <div ref={this.refElement}>
        Hello: Pure component with function out of render
      </div>);
  }
}

export default PureFnOutRender;
