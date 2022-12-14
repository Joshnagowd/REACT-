import React from "react"
import { gmAction, gnAction } from "../redux/Message/Message.action"
import {useDispatch} from 'react-redux'
const Message =()=>{
    let msg ="hello"
    return(
        <div>
            <h1>Message: {msg}</h1>
            <button>GM</button>
            <button>GN</button>
        </div>
    )
}
export default Message