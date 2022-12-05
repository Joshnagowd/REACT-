import React from "react"
import Employee from './Employee'
class User extends React.Component {
    message ="GM"
    user = {
        user_Name: "Joshi",
        user_sal : "no salary",
        email : "Joshi@gmail.com"
    }
    render() {
        return (
            <div>
                <h1>User Component</h1>
                <hr/>
                <Employee joshna = {this.message} user ={this.user}/>
            </div>
        )
    }
}
export default User