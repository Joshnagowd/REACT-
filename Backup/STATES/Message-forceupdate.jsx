import React, {Component} from 'react'
class Message extends Component {
    msg = "Hello Everyone"
    gmHandler = () => {
        console.log(this.msg)
        this.msg = "Good morning"
        console.log(this.msg)
        this.forceUpdate()
    }
    gnHandler = () => {
        console.log(this.msg)
        this.msg = "Good night"
        console.log(this.msg)
        this.forceUpdate()
    }
    render(){
        return<div>
            <h1>Message Component</h1>
            <h2>Wish Message:{this.msg}</h2>
            <button onClick = {this.gmHandler}>GM</button>&nbsp;&nbsp;
            <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message