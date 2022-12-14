import React,{Component} from "react"
import {Link} from 'react-router-dom'
class Navbar extends Component{
    render(){
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to ="/" className="navbar-brand">React Routing</Link>
        <div className="ml-auto">
            <ul  className="navbar-nav">
                <li className="nav-list"><Link className="nav-link" to ="/Home">Home</Link></li>
                <li className="nav-list"><Link className="nav-link" to ="/Aboout">About</Link></li>
                <li className="nav-list"><Link className="nav-link" to ="/Contact">Contact</Link></li>
                
            </ul>
        </div>
    </nav>
}
}
export default Navbar