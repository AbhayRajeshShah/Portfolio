import React from "react"

function Benifit(props){
    return <div className="col-lg-3 col-md-4 benifit">
    <i className={"fa fa-3x "+ props.icon} aria-hidden="true"></i>
    <p>{props.title}</p>
  </div>
}
export default Benifit;