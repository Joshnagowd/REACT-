let Employee = (props) =>{
    return   <div>
        <h1>Employee Comp</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h2>Employee Name:{props.joshna}</h2>
    
        <h2>Employee Name:{props.user.email}</h2>
        <h2>Employee Sal:{props.user.user_sal}</h2>
    </div>

}
export default Employee