



import React, { Component } from 'react';

class ForgetPaswword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputFields: { "name": "", "email": "" },
            errorMessages: {}
        }
    }


    render() {
        console.log(this.state)
        const validate = () => {
            let inputFields = this.state.inputFields
            let errors = {}
            let validityStatus = true
            if (inputFields["name"].length <= 2) {
                validityStatus = false
                errors["name"] = "The name should contain more than two symbols"
            }
            if (inputFields["email"].indexOf("@") === -1) {
                validityStatus = false
                errors["email"] = "The email should contain @"
            }
            this.setState({ errorMessages: errors })
            return validityStatus
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            if (validate()) {

            }
            else {

            }
        }
        return (
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="text" onChange={(e) => this.setState({ inputFields: { "name": e.target.value, "email": this.state.inputFields.email } })} />
                <p style={{ color: "red" }}>{this.state.errorMessages.name}</p>
                <br />
                <input type="text" onChange={(e) => this.setState({ inputFields: { "name": this.state.inputFields.name, "email": e.target.value, } })} />
                <p style={{ color: "red" }}>{this.state.errorMessages.email}</p>
                <br />
                <button type="submit">Submit</button>
            </form>
        )
    }



}

export default ForgetPaswword;