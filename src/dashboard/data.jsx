import React from "react"
import db from "../components/contact/firebase"


function Data(props){
function delContact(){
db.collection("user-contact").doc(props.id).delete();
}
    return (
        <div className="dashboard-data">
            <span>{props.name}</span>
            <span>{props.email}</span>
            <span>{props.number}</span>
            <span className="message">{props.message}</span>
            <div>
            <button type="" onClick={delContact}>x</button>
            </div>
            
        </div>
    )
}
export default Data;