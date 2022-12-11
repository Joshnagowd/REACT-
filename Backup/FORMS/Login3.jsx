import React, {useState} from "react";
const Login=()=>{
    let [user,setUser]=useState({email:"",password:""});
    let updateHandler =(event)=>{
        setUser({...user,[event.target.name]:event.target.value});

    };


return(
    <React.Fragment>
        <pre>{JSON.stringify(user)}</pre>
         <form>
          <div>
            <label>Email Id</label>
            <input type="text" name="email" onChange={updateHandler}/>
              </div>
              <div>
            <label>password</label>
            <input type="password" name="password" onChange={updateHandler}/>
              </div>
              <div>
            
            <input type="submit" value="login"/>
              </div>
              </form>
   </React.Fragment>
);
};
export default Login