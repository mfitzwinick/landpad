import React, { Component } from "react";
import API from '../utils/API';
import Upload2 from "./Upload2";


class UserProfile extends Component {

    state = {
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

    };


    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }
    handleImage = (value) => {
        this.setState({
            profileImage: value
        }, () => {
            console.log(this.state.profileImage)
        });
    }

    handleClick = (e) => {
        e.preventDefault();
        const data = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            city: this.state.city,
            area: this.state.area,
            agree: this.state.agree,
            image: this.state.profileImage
        }

        API.createUser(data).then(res => {
            this.props.setShow(false);
        });
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
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        placeholder="email"
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
                    <p>Upload your Profile Image:</p>
                    <Upload2 profileImage={this.state.profileImage} handleImage={this.handleImage} />
                    <br />
                    <a href="https://docs.google.com/document/d/1kz4CCnEcNbSrN1CystPFAfHhHb7UqS3OhHabBTONJO8/edit?usp=sharing"
                        style={{ fontStyle: "italic", color: "#4169E1", hover: "color:yellow" }}>TERMS AGREEMENT</a>
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
                <button type="button" onClick={this.handleClick}>Submit</button>

            </main>
        )
    }
}


export default UserProfile
