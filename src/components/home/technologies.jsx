import React from "react"

function Technologies(){
   return <div id="Technologies">
    <div className="center">
      <p className="feature-heading">Technologies</p>
    </div>
    
    <div className="row">
      <div className="col-lg-12 info">
        <div className="categories">
          <div className="stuff">
          <button className="Type">Front-End</button>
          <ul >
            <li>HTML / CSS</li>
            <li>Bootstrap</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="stuff">
          <button className="Type">Back-End</button>
          <ul >
            <li>Node JS</li>
            <li>Express</li>
          </ul>
        </div>
        <div className="stuff">
          <button className="Type">Database</button>
          <ul>
            <li>Mongo DB</li>
          </ul>
        </div>
        </div>
      </div>
    </div>
</div>
}

export default Technologies;