let Movie  = () => {
     let movie_Details = {
        dir_Name : "james",
        movie_Name: "avatar",
        "actor" : "don't know",
        "actress" : "maybe"
     }
     return <div>
        <pre>{JSON.stringify(movie_Details)}</pre>
        <h2>Movie info</h2>
        <h3>MovieName :{movie_Details.movie_Name}</h3>
        <h3>Director :{movie_Details.dir_Name}</h3>
     </div>
}
export default Movie