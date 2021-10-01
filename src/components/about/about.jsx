import React from "react";
import Nav from "../nav"
import Footer from "../footer"
import Subheading from "../subheading"

function About(){
    return <div>
        <Nav />
        <div id="About">
            <div className="row">
              <div className="col-lg-6  img">
                <img src="./image/abhay.png" alt=""></img>
              </div>
              <div className="col-lg-6 ">
                 <Subheading name="About Me"/>
                 <br></br>
                 <p>
                  Hello! I am Abhay. I'm currently a Twelth grader from St Aloysius PU College, Mangalore. Just another guy amused by tech and seeking to make a career out of it.I love the feeling of my creation coming to life and thats what drives me. I am currently comfortable with working with HTML, CSS, Bootstrap, React, NodeJS and Express.Can Also build Discord Bots. Lets get in touch so I can help you with building what you need!.
                 </p>
                 <div className="Frameworks">
                    <div> HTML </div>
                    <div> CSS </div><div> Javascript </div><div> React </div><div> Node JS </div><div> Express </div><div> MongoDB </div>  
                 </div>
              </div>
            </div>
        </div>
        <Footer />
        </div>
        
}

export default About;