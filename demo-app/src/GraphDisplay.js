import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import plotData, {categories} from './datasets.js';
import layout1 from './layouts.js';


class GraphDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset_left: plotData[0],
      dataset_right: plotData[1]
    };

    this.handleChangeLeft = this.handleChangeLeft.bind(this);
    this.handleChangeRight = this.handleChangeRight.bind(this);
  }

  handleChangeLeft(event) {
    console.log("Left: ", categories[event.target.value])
    this.setState({
      dataset_left: plotData[event.target.value],
      dataset_right: this.state.dataset_right
    });
  }
  handleChangeRight(event) {
    console.log("Right: ", categories[event.target.value])
    this.setState({
      dataset_left: this.state.dataset_left,
      dataset_right: plotData[event.target.value]
    });
  }

  render() {
    return (
      <div>
        <Plot
          data={[this.state.dataset_left, this.state.dataset_right]}
          layout={layout1}
        />

        <label>
          Select datasets to display:
          <select onChange={this.handleChangeLeft}>
            {listItems}
          </select>
          <select onChange={this.handleChangeRight}>
            {listItems}
          </select>
        </label>

      </div>
    );
  }
}

const listItems = categories.map((category) =>
  <option key={category.key} value={category.key}>{category.name}</option>
);

export default GraphDisplay;