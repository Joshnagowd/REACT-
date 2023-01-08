/*import ReactDOM from 'react-dom'
import App1 from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
ReactDOM.render(<App1/>, document.getElementById("root"))*/

import {createRoot} from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const rootElement = document.getElementById("root");

const root= createRoot(rootElement);
root.render(
    <BrowserRouter>
        <App/>
        </BrowserRouter>
    
);