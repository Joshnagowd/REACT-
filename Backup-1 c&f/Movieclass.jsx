import React from 'react'
class Movieclass extends React.Component {
    movie_Name = "Avatar2"
    type = ['2d','3d']
    more_Details = {
        dir_Name:"james",
         Actor :"ram",
         Actress : "sita"
    }
    render(){
    return  <div>
        <h1>Movie Component</h1>
        <h1>Movie Name:{this.movie_Name}</h1>
        <h1>Movie Type : {this.type}</h1>
        <ul>
            <li>Crew : {this.more_Details.dir_Name}</li>
            <li>Crew : {this.more_Details.Actor}</li>
            <li>Crew : {this.more_Details.Actress}</li>
        </ul>
        </div>
    }
}
export default Movieclass