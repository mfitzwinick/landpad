import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import "../styling/Plan.css"
import API from "../utils/API";


class BarChart extends Component {


    state = {
        options: {
            chart: {
                toolbar: {
                    show: false
                },
                id: 'apexchart-example',
                fontFamily: 'Quicksand, sans-serif;'
            },
            xaxis: {
                categories: ['Your Savings', 'Your Goal']
            },
            dataLabels: {
                enabled: false
            },
            title: {
                align: 'center',
                text: 'You are on your way!',
                style: { fontSize: '20px' }
            }
        },
        series: [{
            name: ['yoursavings', 'yourgoal'],
            data: [5, 10]
        }]

    };

    componentDidMount() {
        API.getSavings(localStorage.getItem("id"))
            .then(res => {
                if (res.data !== null) {
                    console.log(res)
                    const totalSaved = res.data.downPaymentSavings + res.data.reserveSavings + res.data.movingExpenseSavings + res.data.closingCostSavings;
                    this.setState({
                        series: [{ name: ['yoursavings', 'yourgoal'], data: [totalSaved, res.data.savingsGoal] }]
                    })
                }
            })
    }

    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
        )
    }
}


export default BarChart;