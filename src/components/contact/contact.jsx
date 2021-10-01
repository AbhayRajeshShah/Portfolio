import React from "react"
import Subheading from "../subheading"
import Nav from "../nav"
import Form from "./form"

function Contact(){
   

    return <div>
        <Nav />
        <Subheading name="Contact"/>
        <div id="form">
        <Form />
        </div>
        <footer>
 
 <div className="flex-hor">
   <div><a href="https://discord.gg/kAM5cW9UHB"><i className="fab fa-discord fa-2x"></i></a></div>
 </div>
 <p className="copywrite">COPYRIGHT©2021 <span className="colored">A</span>BHAY ALL RIGHS RESERVED</p>

</footer>
    </div>
}
export default Contact;