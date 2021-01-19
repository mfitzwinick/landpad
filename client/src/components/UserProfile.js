import React, { Component } from "react"

class UserProfile extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            california: false,
            city: "",
            area: "",
            agree: false,
            profileImage: ""

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
                        name="firstName"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        placeholder="First Name"
                    />
                    <br />

                    <input
                        name="lastName"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        placeholder="Last Name"
                    />
                    <br />
                    <br />

                    <input
                        name="userName"
                        value={this.state.userName}
                        onChange={this.handleChange}
                        placeholder="User Name"
                    />
                    <br />

                    <input
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder="password"
                    />
                    <br />
                    <input
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        placeholder="Confirm Password"
                    />
                    <br />

                    <label>
                        <p>Do you live in California?  (more states coming soon!)</p>
                        <input
                            type="radio"
                            name="california"
                            value="no"
                            checked={this.state.gender === "no"}
                            onChange={this.handleChange}
                        /> No
                    </label>

                    <br />

                    <label>
                        <input
                            type="radio"
                            name="california"
                            value="yes"
                            checked={this.state.gender === "yes"}
                            onChange={this.handleChange}
                        /> Yes
                    </label>

                    <br />

                    <select
                        value={this.state.city}
                        name="city"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose your nearest city --</option>
                        <option value="losangeles">Los Angeles</option>
                        <option value="sandiego">San Diego</option>
                        <option value="sanfrancisco">San Francisco</option>
                        <option value="sanjose">San Jose</option>
                        <option value="fresno">Fresno</option>
                    </select>
                    <br />
                    <p>Tell us the name of your neighborhood or area: </p>
                    <input
                        name="area"
                        value={this.state.area}
                        onChange={this.handleChange}
                        placeholder="area"
                    />
                    <br />
                    <br />
                    <button>UPLOAD PROFILE IMAGE</button>

                    <label>
                        <p>Do you agree to LAND PAD terms of use?</p>
                        <p>TERMS HERE (a href to terms here)</p>
                        <input
                            type="checkbox"
                            name="agree"
                            onChange={this.handleChange}
                            checked={this.state.agree}
                        /> Agree?
                    </label>
                    <br />

                    <br />


                </form>
                <hr />
                <h2>Confirm your information:</h2>
                <p>Your name:{this.state.firstName} {this.state.lastName}</p>
                <p>Your user name: {this.state.userName}</p>

                <p>Please choose your nearest city: {this.state.city}</p>

                <p>CA: {this.state.california ? "Yes" : "No"}</p>

                <p>Agree to Terms?: {this.state.agree ? "Yes" : "No"}</p>
                <button>Submit</button>


            </main>
        )
    }
}

export default UserProfile
