import React, { Component } from "react"
import API from '../utils/API';

class SavingsProfile extends Component {
    constructor() {
        super()
        this.state = {
            userName: localStorage.getItem("id"),
            savingsGoal: 0,
            downPaymentSavings: 0,
            reserveSavings: 0,
            movingExpenseSavings: 0,
            closingCostSavings: 0,
            veteran: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }


    handleClick = (e) => {
        e.preventDefault();
        const data = {
            userName: this.state.userName,
            savingsGoal: parseInt(this.state.savingsGoal),
            downPaymentSavings: parseInt(this.state.downPaymentSavings),
            reserveSavings: parseInt(this.state.reserveSavings),
            movingExpenseSavings: parseInt(this.state.movingExpenseSavings),
            closingCostSavings: parseInt(this.state.closingCostSavings),
            veteran: false
        }
        console.log(data)

        API.createSavings(data, localStorage.getItem("id")).then(res => {
            // this.props.setShow(false);
            console.log(res)
            window.location.reload();
        });
    }

    render() {
        return (
            <main>
                <form>

                    <input
                        name="savingsGoal"
                        value={this.state.savingsGoal}
                        onChange={this.handleChange}
                        placeholder="Savings Goal"
                    />
                    <br />
                    <br />

                    <input
                        name="downPaymentSavings"
                        value={this.state.downPaymentSavings}
                        onChange={this.handleChange}
                        placeholder="Down Payment Saved"
                    />
                    <br />

                    <input
                        name="closingCostSavings"
                        value={this.state.closingCostSavings}
                        onChange={this.handleChange}
                        placeholder="Estimate Closing Costs"
                    />

                    <input
                        name="movingExpenseSavings"
                        value={this.state.movingExpenseSavings}
                        onChange={this.handleChange}
                        placeholder="Savings for Moving"
                    /><br />

                    <input
                        name="reserveSavings"
                        value={this.state.reserveSavings}
                        onChange={this.handleChange}
                        placeholder="Reserves"
                    />
                    <br />
                    <br />
                    <br />


                    <select
                        value={this.state.veteran}
                        name="veteran"
                        onChange={this.handleChange}
                    >
                        <option value="">Are you a veteran or serving now?</option>
                        <option value="yes">Yes - Click on VA loan info below</option>
                        <option value="No">No - Let's get planning</option>
                    </select>
                    <a href="https://www.benefits.va.gov/homeloans" style={{ fontStyle: "italic", color: "#4169E1" }}>VA loan info here</a>
                    <br />

                </form>
                <hr />
                <h2>Get excited about your goal!</h2>
                <h2>You got this!</h2>
                <p>Your savings goal:{this.state.savingsGoal} </p>
                <button type="button" onClick={this.handleClick}>Update Your Progress</button>
            </main>
        )
    }
}

export default SavingsProfile