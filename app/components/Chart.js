import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BarChart } from 'react-easy-chart';

class Chart extends PureComponent {
  state = {
    dataDisplay: '',
  }

  displayLabel = (d) => {
    const label = d.x.split(/(?=[A-Z])/);
    label.splice(1, 0, 'Component');
    this.setState({ dataDisplay: `The value on the ${label.join(' ')} is ${parseFloat(d.y).toFixed(2)} ms.` })
  }

  render() {
    const { max, data } = this.props;

    return [
      <h3 key="title">{max} tests with React 16 (Fiber)</h3>,
      <BarChart
        key="chart"
        colorBars
        axes
        axisLabels={{ y: 'Time(ms)', x: 'Scenarios' }}
        width={800}
        height={300}
        grid
        clickHandler={this.displayLabel}
        data={data}
      />,
      <div
        key="display"
        style={{ display: 'inline-block', verticalAlign: 'top', paddingLeft: '20px' }}
      >
        {this.state.dataDisplay ? this.state.dataDisplay : 'Click on a bar to show the value'}
      </div>,
    ];
  }
}

Chart.propTypes = {
  max: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.number,
  })).isRequired,
};

export default Chart;
