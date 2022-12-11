import React, {useState} from "react";
const Login=()=>{
    let [user,setUser]=useState({email:"",password:""});
    

return(
    <React.Fragment>
        <pre>{JSON.stringify(user)}</pre>
              <form>
                                <div>
                                    <input placeholder="Email id" className="form-control" type="text"
                                     onChange={(event)=>{
                                       setUser({
                                        ...user,[event.target.name]:event.target.value,
                                         });
                                         }}
                                         />
                                </div>
                                <div className="formgroup">
                                    <input placeholder="Password" className="form-control" type="password"
                                     onChange={(event)=>{
                                       setUser({
                                        ...user,[event.target.name]:event.target.value,
                                         });
                                         }}
                                         />
                                </div>
                                <div>
                                    <input className="btn btn-primary" type="submit" value ="Login"
                                    />
                                </div>
                                
                              </form>
                            
                
    </React.Fragment>
);
};
export default Login
