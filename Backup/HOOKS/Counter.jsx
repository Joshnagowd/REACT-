import React from 'react'
let Counter = () => {
    let[Counter, setCounter]= React.useState(1);
    return <React.Fragment>
        <h1>Counter Comp</h1>
        <button onClick = {() => {
            setCounter(Counter - 1)
        }}>-</button>
            {Counter}
            <button onClick={() => {
                setCounter(Counter + 1)
            }}>+</button>
        </React.Fragment>

}
export default Counter