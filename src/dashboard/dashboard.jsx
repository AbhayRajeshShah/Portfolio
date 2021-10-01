import React from "react"
import db from "../components/contact/firebase"
import Data from "./data"
import {useState,useEffect} from "react"



function Dashboard(){
const [contacts,setcontacts]=useState([]);
useEffect(()=>{
    db.collection("user-contact").onSnapshot(
        (snapshot)=>{
           setcontacts(
                snapshot.docs.map((doc)=>
                ({
                    name:doc.data().name,
                    message:doc.data().message,
                    number:doc.data().number,
                    email:doc.data().email,
                    id:doc.id
                })
                )
            )
        }
    )    
},[])
const [input,setInput]=useState("");
function inputChange(evt){

   setInput(evt.target.value);
}
contacts.forEach((el)=>console.log(el));

    return(
  <div className="dashboard">
      <div className="dashboard-data">
        <input type="text" value={input} onChange={inputChange}/>
      </div>
{contacts.filter((el)=>el.name.toLowerCase().includes(input.toLowerCase())).map(p=> <Data name={p.name} message={p.message} number={p.number} email={p.email} id={p.id}/>)} 
 </div>
       
    )

}

export default Dashboard;