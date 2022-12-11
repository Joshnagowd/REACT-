import React, {useState} from "react";
const Login=()=>{
    let [user,setUser]=useState({email:"",password:""});
    let emailHandler =(event)=>{
        setUser({...user,email:event.target.value});

    }
    let passwordHandler =(event)=>{
        setUser({...user,password:event.target.value})
    }

return(
    <React.Fragment>
        <pre>{JSON.stringify(user)}</pre>
         <form>
          <div>
            <label>Email Id</label>
            <input type="text" onChange={emailHandler}/>
              </div>
              <div>
            <label>password</label>
            <input type="password" onChange={passwordHandler}/>
              </div>
              <div>
            
            <input type="submit" value="login"/>
              </div>
              </form>
   </React.Fragment>
);
};
export default Login