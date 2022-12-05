import React from 'react'
import ComB from './CompB'
function CompA() {
    let ename = "Joshi"
    let esal = 45000
    let eloc = ['Hyderabad', 'Banglore']

return(
    <div>
        <h1>Component A</h1>
        <hr/>
        <ComB employee = {ename} esal = {esal} location={eloc}/>
    </div>
)
}
export default CompA