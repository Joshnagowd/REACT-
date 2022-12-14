/*import ReactDOM from 'react-dom'
import App1 from './App'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
ReactDOM.render(<App1/>, document.getElementById("root"))*/
import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./App";
const rootElement = document.getElementById("root");

const root= createRoot(rootElement);
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);