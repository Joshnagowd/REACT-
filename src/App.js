import "./App.css"
import Navbar from "./COMPONENT/Navbar"
import { Route, Routes } from "react-router-dom";

import Home from './Routes/Home'
import About from './Routes/About'
import Services from './Routes/Services'
import Contact from './Routes/Contact'
import { Route, Routes } from "react-router-dom";
function App(){
    return(
        <div className="App">
            <Routes>
             <Route path="/" element={<Home/>}/>
             <Route path="/" element={<About/>}/>
             <Route path="/" element={<Services/>}/>
             <Route path="/" element={<Contact/>}/>

             
            </Routes>
            <h1>App Component</h1>
             <Navbar/>
             <Home/>
             <About/>
             <Services/>

             <Contact/>
        </div>
    );
}
export default App;