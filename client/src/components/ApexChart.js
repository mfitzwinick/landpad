
import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import "../styling/Plan.css"

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
        fontFamily: 'Quicksand',
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
      colors: ['#01b26f', '#41c253', '#bde11d', '#fff100', '#00BFFF'],
      labels: ['Down Payment', 'Closing Costs', 'Reserves', 'Moving Costs', 'Inspection Costs']

    },
    series: [20, 4, 3, 2, 1],

  };



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