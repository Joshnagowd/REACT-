//import Event from './EVENTHANDLING/Event'
//import Product from './PRODUCT1/product1'
//import Login1 from './FORM HANDLING/Login1'
//import Navbar from './NAVBAR/Navbar'
//import Message1 from'./EVENTHANDLING/Message1'
//import Registration from './FORM HANDLING/Registration'
//import Employee from './LISTHANDLING/Employee-B'
//import Fibanacci from './fibonacci/one'
//import Registration from './FORM HANDLING/Registration'
import React, {Component} from 'react'
import Navbar from './NAVBAR/Navbar'
import ContactApp from './CONTACTS/ContactApp'
class App extends Component {
     render(){
       return(
          <div>
            <h1>App component</h1>
               <hr/>
              <Navbar/>
              <ContactApp/>
              <hr/>
              
         </div>
       )
     }
}
export default App