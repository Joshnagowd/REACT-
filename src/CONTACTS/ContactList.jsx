import React,{Component} from "react"
class ConntactList extends Component{
    contactHandler =(contact)=>{
        //console.log(contact.name.first)
        this.props.selected_Contacts(contact)
    }
    render(){
        return(
        <div className="container">
            <h1>Contact List</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <div className="row">
                <div className="col">
                    <table className="table table-hover">
                        <thead className="bg-primary">
                            <tr>
                                <th>id</th>
                                <th>Name</th>
                    
                                <th>Email</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.props.user_Contacts.length > 0 ? <>
                                {  
                                  this.props.user_Contacts.map((contact,index) =>{
                                
                                    return<tr key ={index} onMouseOver={this.contactHandler.bind(this, contact)}>
                                        <td>{user.login.uuid.substr(32)}</td>
                                        <td>{contact.name}</td>

                                        <td>{contact.email}</td>
                                        <td>{contact.gender}</td>
                            
                                    </tr>
                                })
                            }
                            </>:null
                          }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
   )
        
    }
}
export default ContactList