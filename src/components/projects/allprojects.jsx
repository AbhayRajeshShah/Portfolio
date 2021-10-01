import React from "react"
import EachProj from "./eachProject"
import Subheading from "../subheading"


function AllProj(){
return <div id="projects">
<Subheading name="Projects"/>
<EachProj direction ="left" href="https://ibcbhairavi.netlify.app" img="bhairavi" content="This Site was made with HTML, CSS and Bootstrap. Javascript was used for effects on scroll."/>
<EachProj direction ="right" href="/"  
img="quiz" 
content="A simple Quiz Web App made in Node JS.HTML/CSS and Bootstrap were used for the simple design.It also has a leaderboard system."/>
<EachProj direction ="left" href="https://abhayrajeshshah.github.io/Car" 
img="car" 
content="A simple car race game made with HTML 5 Canvas for logic practice."/>
<EachProj direction ="right" href="/" 
img="todo" 
content="An Elegant To-Do App made in Node JS connected to Mongo DB.EJS templating was used.
"/>
</div>
}

export default AllProj;