import React,{Component} from "react"
class Registration extends Component {
    state={
        username:"",
        email:"",
        mobile:"",
        passwword:""

    }
    updateHandler =(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    submitHandler=(event)=>{
        event.preventDefault();
        console.log(this.state)
    }
    render(){
    return(
        <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
              <label>User name</label>&nbsp;&nbsp;
              <input type="text" name="user name" onChange={this.updateHandler}  required placeholder="plz enter valid username"/><br/>
              <label>Mobile number</label>&nbsp;&nbsp;
              <input type="number" name="mobile number" onChange={this.updateHandler}/><br/>
              <label>Email</label>&nbsp;&nbsp;
              <input type="email" name="email" onChange={this.updateHandler}/><br/>
              <label>Password</label>&nbsp;&nbsp;
              <input type="password" name="password"onChange={this.updateHandler}/><br/>
              <label>Gender</label>&nbsp;
              <input type='radio' value="gender" onChange={this.updateHandler} name ="male"/> male
              <input type='radio'  onChange={this.updateHandler} name="female"/> female<br/>
              <label>state</label>
              <select onChange={this.updateHandler} name="state" >
                <option>AP</option>
                <option>KA</option>
                <option>TN</option>
                <option>KR</option>
              </select><br/>
              <label>Message</label>
              <textarea rows="5" coloums="4" onChange={this.updateHandler} name="Message"></textarea><br/>
              <input type="checkbox"/>please accept all terms and conditions<br/><br/>

              <input type="submit" value="login"/>
              
            </form>
            </div>
    )

    }

}
export default Registration