
import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import "../styling/Financial.css"

class Donut extends Component {

    state = {
      options: {},
      series: [24, 55, 41, 17, 2],
      labels: ['A', 'B', 'C', 'D', 'E']
    };
  

    // colors: [function({ value, seriesIndex, w }) {
    //   if (value < 55) {
    //       return '#7E36AF'
    //   } else {
    //       return '#D9534F'
    //   }
    // }, function({ value, seriesIndex, w }) {
    //   if (value < 111) {
    //       return '#7E36AF'
    //   } else {
    //       return '#D9534F'
    //   }
    // }]
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