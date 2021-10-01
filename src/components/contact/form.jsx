import React,{useState} from "react"

import db from "./firebase"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

function Form(){
    const [userData, setUserData] = useState({
        name:"",
        message:"",
        number:"",
        email:""
    });
    const [button,setButton]=useState("Submit");
    
let fname;
let fvalue;

    function change(evt){
        fname = evt.target.name;
        fvalue = evt.target.value;
       setUserData({...userData,[fname]:fvalue})
       }


       const submitUserData=async(event)=>{
        event.preventDefault();
        const {name, email, message,number} =userData;
        if(name && email && message && number !==null){
          db.collection("user-contact").add({email:email,name:name,message:message,number:number});
          setUserData({name:"",
          message:"",
          number:"",
          email:""});
          setButton("Form Submitted");
          setTimeout(()=>{setButton("Submit")},2000);
        }else{
            alert("Please Fill out the fields");
           
         }
         
          
        }



       
     return(
        
            
        <form method="post" onSubmit={submitUserData}>
            <input type="text" name="name" value={userData.name} placeholder="Name" className="form-control input-name" onChange={change} />
            <input  pattern="[0-9]{10}" required="true" type="tel" name="number"  value={userData.number} placeholder="0123456789" className="form-control input-name" onChange={change} />
            <input type="email" name="email" value={userData.email} placeholder="E-mail" className="form-control input-name" onChange={change} />
            <textarea   className="form-control" cols="30" rows="10" name="message" value={userData.message} placeholder="Enter Your Message Here" onChange={change}></textarea>
            <button type="submit" className="btn btn-lg btn-dark" >{button}</button>
        </form>
    
     )  
    
}

export default Form;