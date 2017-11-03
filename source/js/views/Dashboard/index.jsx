import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { testAction, testAsync } from 'actions/app';
import rd3 from 'react-d3';

@connect(state => ({
  // asyncData: state.app.get('asyncData'),
  // asyncError: state.app.get('asyncError'),
  // asyncLoading: state.app.get('asyncLoading'),
  // counter: state.app.get('counter'),
}))
export default class Dashboard extends Component {
  render() {
    const LineChart = rd3.LineChart;
    var lineData = [
      {
        name: "series1",
        values: [ { x: 0, y: 20 }, { x: 40  , y: 10 } ],
        strokeWidth: 3,
        strokeDashArray: "5,5",
      },
      {
        name: "series2",
        values: [ { x: 0, y: 82 }, { x: 10, y: 82 } ]
      }
    ];
    return (  
      <LineChart
        legend={true}
        data={lineData}
        width='100%'
        height={400}
        viewBoxObject={{
          x: 0,
          y: 0,
          width: 500,
          height: 400
        }}
        title="Line Chart"
        yAxisLabel="Altitude"
        xAxisLabel="Elapsed Time (sec)"
        gridHorizontal={true}
      />
    );
  }
}
