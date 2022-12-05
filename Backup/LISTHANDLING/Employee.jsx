import React,{Component} from "react"
import users from './userdata'
class Employee extends React.Component{
    render(){
        return<>
        <div className="container">
            <div className="row">
                <div className="col-md">
                    <table className="table">
                        <thead className="bg-primary">
                            <tr>
                                <th>id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>ip address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user,index)=>{
                                    return<tr key ={index}>
                                        <td>{user.id}</td>
                                        <td>{user.first_name}</td>
                                        <td>{user.last_name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.ip_address}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
        
    }
}
export default Employee