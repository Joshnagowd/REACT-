import "./App.css"
import { Route, Routes } from "react-router-dom";
import Home from './Routes/Home'
import About from './Routes/About'
import Services from './Routes/Services'
import Menu from "./Routes/Menu"
import Contact from './Routes/Contact'

function App(){
    return(
        <div className="App">
            
            <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/About" element={<About/>}/>
             <Route path="/Menu" element={<Menu/>}/>
             <Route path="/Services" element={<Services/>}/>
             <Route path="/Contact" element={<Contact/>}/>


             
            </Routes>
            
            
        
             
        </div>
    );
}
export default App;