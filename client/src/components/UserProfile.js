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
                    <p>Select your closest CA city (more locations coming soon!)</p>
                    <select
                        value={this.state.city}
                        name="city"
                        onChange={this.handleChange}
                    >
                        <option value="">-- Please Choose your nearest CA city --</option>
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
                    <br />
                    <a href src="" style={{ fontStyle: "italic", color: "#4169E1" }}>TERMS AGREEMENT</a>
                    <p>Do you agree to LAND PAD terms of use?</p>
                    <select
                        value={this.state.agree}
                        name="agree"
                        onChange={this.handleChange}
                    >
                        <option value="">Please select yes or no</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </form>
                <br />
                <hr />
                <h2>Confirm your information:</h2>
                <p>Your name:{this.state.firstName} {this.state.lastName}</p>
                <p>Your user name: {this.state.userName}</p>
                <p>Agree to Terms?: {this.state.agree ? "Yes" : "No"}</p>
                <button>Submit</button>

            </main>
        )
    }
}

export default UserProfile
