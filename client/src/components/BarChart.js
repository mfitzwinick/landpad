import React, { Component, UseEffect } from 'react';
import Chart from 'react-apexcharts'
import "../styling/Plan.css"
import API from "../utils/API";


class BarChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
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
                data: [20000, 180000]
            }],

        }
    }
    render() {
        return (
            <Chart options={this.state.options} series={this.state.series} type="bar" width={500} height={320} />
        )
    }
}

// function updateInputs() {
//     const chart = new ApexCharts(el, options);
//     chart.updateOptions({
//         series: [{
//             name: ['yoursavings', 'yourgoal'],
//             data: [x, y]
//         }],
//     })
// }

// function grabSavingsData() {
//     const [APIcall, setAPIcall] = useState()

//     useEffect(() => {
//         API.getSavings().then(res => {
//             setAPIcall(res.data)
//             console.log(res.data);
//         })
//     }, []);
//     let totalSaved = {};
//     function addInputs() {
//         console.log(res.data)
//     }
export default BarChart;