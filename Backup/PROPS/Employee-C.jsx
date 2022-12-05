import React, {Component} from "react"
class Employee extends Component{
    render(){
    return(
        <div>
            <h1>Employee Component</h1>
            <pre>{JSON.stringify(props)}</pre>
            <h2>Employee Name:{this.props.user.user_Name}</h2>
        
            <h2>Employee sal:{this.props.user.sal}</h2>
        </div>
    )
}
    
    }
    export default Employee