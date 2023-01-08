import React from 'react'     
import Navbar from "../COMPONENT/Navbar";
import piza from "../Routes/piza.jpg"



function About(){
    return(
        <>
        
        <Navbar/>
    
               <div className="container">
                    <div className="row">
                               <div className="col-md-8">
                                  <img src={piza} height="500" width="500"/>
                                </div>
                                <div className="col-md-4 mt-5">
                               <p><b>Organic Products</b></p>
                               <h1>About Our Organic</h1>
                               <div className="line"></div>
                                  <p> Organic food is about food and drinks produced by methods complying with the standards of organic farming.
                                       Standards vary worldwide,but Organic farming features practices that cycle resources. Organic food is about food and drinks produced by methods complying with the standards of organic farming.
                                     Standards vary worldwide,but Organic farming features practices that cycle resources.  Organic food is about food and drinks produced by methods complying with the standards of organic farming.
                                     Standards vary worldwide,but Organic farming features practices that cycle resources.  </p>
                              
                                </div>
                            <div/>
                    </div>
                </div>
           
  


        
        </>
    );
}
export default About