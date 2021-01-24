import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import "../styling/Plan.css"

class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: 'apexchart-example'
                },
                xaxis: {
                    categories: ['Your Savings', 'Your Goal']
                }
            },
            series: [{
                name: 'series-1',
                data: [20000, 180000]
            }]
        }
    }
    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
        )
    }
}

export default BarChart;