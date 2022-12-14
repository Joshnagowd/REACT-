import React, {Component} from 'react'
import Counter from './HOOKS1/Counter'
import Digital from './HOOKS1/Digital'
import Message from "./HOOKS1/Message"
import Message1 from "./HOOKS1/Message1"
import Product from "./HOOKS1/Product"
import Login1 from "./FORMS/Login1"
import Login2 from './FORMS/Login2'
import Login from './FORMS/Login'
import Login3 from './FORMS/Login3'
import Login from './FORMS/Login'
import Login1 from './FORMS/Login1'
import Login2 from './FORMS/Login2'
import Login3 from './FORMS/Login3'
import Login4 from './FORMS/Login4'
import Login from './FORMS/Login'

class App1 extends Component {
  render(){
    return(
      <div>

        <Counter/>
        <Message/>
        <Message1/>
        <Product/>
        <Digital/>
       
        <Login1/>
        <Login2/>
        <Login/>
        <Login3/>
        <Login4/>
       
      </div>
    )
  }
}
export default App1