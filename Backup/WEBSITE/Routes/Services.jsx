import Navbar from "../COMPONENT/Navbar"

import Hero from "../COMPONENT/Hero";
function Services(){
    return(
        <>
        
        <Navbar/>
        <Hero cName="Hero-mid"
          HeroImg="https://th.bing.com/th/id/OIP.-VPR8v-PCD7Yvi5uJ88SWAHaEK?w=291&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" width="800" height="500" 
    
          btnClass="hide"/>
          <h1> Our Services </h1>
          <p>All Over India our branches are available</p>
          <p>To Maintain the quality and tasty pizza as per customer taste </p>
          <h2> QUick FOr Excellent Offers <i class="fa fa-bell" aria-hidden="true"></i></h2>      
           <p>our services available 24/7  <i class="fa fa-pie-chart" aria-hidden="true"></i></p>
       
        </>
    
    );
}
export default Services