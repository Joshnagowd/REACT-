import React from "react"
import { useState } from "react"
const Message =() =>{
    let [msg,setMsg] = useState("Hello");
    /*let gmHandler =() =>{
        setMsg("Gm Joshi")
    }
    let gnHandler =()=>{
        setMsg("Gn joshi")
    }*/
    return(
        <div>
            <h1>Message Component : {msg}</h1>
            <button onClick={()=>{
                setMsg("GM Joshi")
            }}>GM</button>
            <button onClick={()=>{
                setMsg("gn gowd")
            }}>GN</button>
        </div>
    )
}
export default Message