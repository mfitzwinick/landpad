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
                        name="reserveSavings"
                        value={this.state.reserveSavings}
                        onChange={this.handleChange}
                        placeholder="Reserves"
                    />
                    <br />
                    <input
                        name="movingExpenseSavings"
                        value={this.state.movingExpenseSavings}
                        onChange={this.handleChange}
                        placeholder="Savings for Moving"
                    />

                    <br />

                    <input
                        name="closingCostSavings"
                        value={this.state.area}
                        onChange={this.handleChange}
                        placeholder="area"
                    />
                    <br />

                    <label>
                        <p>Are you a veteran or currently serving in the military?</p>
                        <p>VA LOAN LINK HERE </p>
                        <input
                            type="checkbox"
                            name="veteran"
                            onChange={this.handleChange}
                            checked={this.state.veteran}
                        />
                    </label>
                    <br />

                </form>
                <hr />
                <h2>Get excited about your goal!</h2>
                <h2>You got this!</h2>
                <p>Your savings goal:{this.state.savingsGoal} </p>
                <button>Submit</button>
            </main>
        )
    }
}

export default SavingsProfile