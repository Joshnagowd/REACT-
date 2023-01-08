import Joshna from "../COMPONENT/Homemain";
import Navbar from "../COMPONENT/Navbar";
import Hero from "../COMPONENT/Hero";

 function Home(props){
    return (
        <>
    
         <Navbar/>
         <Hero cName="Hero"
          HeroImg="https://www.suafranquia.com/views/sources/images/conteudo/principal/e67edfd4af92ba71222fa22571012461.png  " 
          url="/"
          btnClass="show" />
          <Joshna/>
         </>
      
       
        
    
    );
}
export default Home;