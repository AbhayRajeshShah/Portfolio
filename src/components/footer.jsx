import React from "react";

function Footer(props){
    return <div>
<div className={"contact "+props.className}>{}
<button className="btn btn-lg btn-dark "><span>Get In Touch!</span></button>
</div>

      
 <footer>
 
   <div className="flex-hor">
     <div><a href="https://discord.gg/kAM5cW9UHB"><i className="fab fa-discord fa-2x"></i></a></div>
   </div>
   <p className="copywrite">COPYRIGHT©2021 <span className="colored">A</span>BHAY ALL RIGHS RESERVED</p>

 </footer>
 </div> 
}

export default Footer;