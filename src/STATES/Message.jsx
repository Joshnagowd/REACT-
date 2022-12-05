import React , {Component} from "react"
class Message extends Component {
    state ={
        msg:"Hello..."
    }
    return() {
        console.log("First time")
        return <div>
            <h1>Message Value:{this.state.msg}</h1>
            <button onClick ={this.gmHandler}>GM</button>&nbsp; 
            <button onClick ={this.gmHandler}>GN</button>
        </div>
    }
}
export default Message
