import React,{Component} from "react"
class Message1 extends Component{
    state={
        msg:"Hello Everyone"
    }
    gmHandler=()=>{
        this.setState({msg:"Gm,joshi"})
    }
    gaHandler=()=>{
        this.setState({msg:"Ga"})
    }
    gnHandler=()=>{
        this.setState({msg:"Gn"})
    }

    render(){
        return(
           <div>
            <h2>Message value:{this.state.msg}</h2>
            <button onClick={this.gmHandler}>GM</button>&nbsp;&nbsp;
            <button onClick={this.gaHandler}>GA</button>&nbsp;
            <button onClick={this.gnHandler}>GN</button>
           </div> 
        )
}

}
export default Message1