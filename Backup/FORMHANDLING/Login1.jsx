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
        this.setState({password: event.target.value})
     }

    render(){
        return(
            <div className='container mt-5'>
                 <pre>{JSON.stringify(this.state)}</pre> 
                <div  className='row'>
                    <div className='col-md-6'>
            <form action=''>
                <label htmlFor=''>Email</label>
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