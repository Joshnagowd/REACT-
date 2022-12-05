let Movie = () => {
     let movie_rel = 'apr 12'
     let Movie_Language = 'telugu'
     let movie_Details = {
     movie_Name : 'Bahubali' ,
     Director_Name : "rajamouli",
     Actor_Name : "prabhas",
     Actress_Name : "Anushka"
     }

      return <div>
        <h1> realease date:{movie_rel} </h1>
        <h2> ActorName:{movie_Details.Actor_Name}</h2>
        <h2> ActressName:{movie_Details.Actress_Name}</h2>
        <h2>Director name :{movie_Details.Director_Name}</h2>
        <h2> Movie Language:{Movie_Language}</h2>
      </div>
}
export default Movie