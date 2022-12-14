import React, { Component } from "react"
import Relatedapp from './NAVBAR1/Relatedapp'
/*import Home from './COMPONENTS/Home'
import About from './COMPONENTS/Contact'
//import Contact from './COMPONENTS/About'
import Counter from './HOOKS1/Counter'
import Message from "./HOOKS1/Message"
import Message1 from "./HOOKS1/Message1"
import Product from "./HOOKS1/Product"*/
import ContactApp from './CONTACTS/ContactApp'
//import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
class App extends Component {
  render(){
    return(
      <div>
       <Relatedapp/>
       <ContactApp/>
      </div>
    )
  }
}
export default App