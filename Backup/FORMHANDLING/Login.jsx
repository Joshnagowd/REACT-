import React, {Component} from 'react'
class Login  extends Component {
    state={
        email:"",
        password:""
     }
     emailHandler=(event)=>{
        console.log(event.target.value)
        this.setState({email: event.target.value})
     }
     passwordHandler=(event)=>{
        console.log(event.target.value)
        this.setState({password: event.target.value})
     }
     submitHandler=(event)=>{
        //invoking API
        event.preventDefault()
        console.log(this.state)
     }
     

    render(){
        return(
            <div className='container mt-5'>
                
                <div  className='row'>
                    <div className='col-md-6'>
            <form onSubmit={this.submitHandler}>
                <label>Email</label>
                <input type="email" onChange={this.emailHandler}/><br/>
                <label>password</label>
                <input type="password" onChange={this.passwordHandler}/><br/>
                <input type ="submit" value="login"/>
                </form>
            </div>
         </div>
    </div>
        )
    }

}
export default Login