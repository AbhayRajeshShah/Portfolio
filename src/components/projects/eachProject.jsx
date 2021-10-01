import React from "react"

function EachProj(props){
    // eslint-disable-next-line 
        {if(props.direction==="left"){
            return <div className={"row " + props.direction}>
<div className="col-lg-6 col-md-6">
      <a href={props.href}>
        <img src={"image/"+props.img+".png"} alt="" className={"project-img project-img-"+props.direction} ></img>
      </a>
    </div>
  <div className="col-lg-6 col-md-6 flex-vert">
  <p className="project-detail">
      {props.content}
  </p>
  </div>
  </div>
        }else{
            return <div className={"row " + props.direction}>
                <div className="col-lg-6 col-md-6 flex-vert">
  <p className="project-detail">
      {props.content}
  </p>
  </div>
  <div className="col-lg-6 col-md-6">
  <a href={props.href}>
        <img src={"image/"+props.img+".png"} alt="" className={"project-img project-img-"+props.direction} ></img>
      </a>
    </div>
    </div>
        }}
    

}

export default EachProj;