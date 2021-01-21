
import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import "../styling/Financial.css"

class Donut extends Component {

  state = {
    options: {
      legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '18px',
        fontFamily: 'Helvetica, Arial',
        fontWeight: 400,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        offsetX: 0,
        offsetY: 0,
        labels: {
          colors: undefined,
          useSeriesColors: false
        },
        markers: {
          width: 12,
          height: 12,
          strokeWidth: 0,
          strokeColor: '#fff',
          fillColors: undefined,
          radius: 12,
          customHTML: undefined,
          onClick: undefined,
          offsetX: 0,
          offsetY: 0
        },
        itemMargin: {
          horizontal: 5,
          vertical: 0
        },
        onItemClick: {
          toggleDataSeries: true
        },
        onItemHover: {
          highlightDataSeries: true
        },
      },
      colors: ['#546E7A', '#E91E63'],
      labels: ['', 'Oranges', 'Berries', 'Grapes']

    },
    series: [24, 55, 41, 17, 2],
  
  };

  //  
  componentDidMount() {
    // API call goes here
    // Once data is retrieved you need to format the data to look like initial state
    // Construct a new ojbect with values = to each keys data point
    // set state to the new object
  }

  render() {

    return (
      <div className="donut">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
        {/* <form>
                    // 
                    />
                    <br />

                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <br />
                    <br /> */}

      </div>
    );
  }
}

export default Donut;