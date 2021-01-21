import React, { Component } from "react"

class SavingsProfile extends Component {
    constructor() {
        super()
        this.state = {
            userName: "",
            savingsGoal: null,
            downPaymentSavings: null,
            reserveSavings: null,
            movingExpenseSavings: null,
            closingCostSavings: null,
            veteran: Boolean,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            this.setState({
                [name]: checked
            })
            :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <main>
                <form>
                    <input
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange}
                        placeholder="User Name"
                    />
                    <br />

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
                    <a href src="https://www.benefits.va.gov/homeloans" style={{ fontStyle: "italic", color: "#4169E1" }}>VA loan info here</a>
                    <br />

                </form>
                <hr />
                <h2>Get excited about your goal!</h2>
                <h2>You got this!</h2>
                <p>Your savings goal:{this.state.savingsGoal} </p>
                <button>Update Your Progress</button>
            </main>
        )
    }
}

export default SavingsProfile