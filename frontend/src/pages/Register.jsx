import React from "react";
import { useState } from "react";
function Register() {
const [user, setUserData] = useState({
    data: "",
    fullName: "",
    userName: "",
    password: "",
    type:""
})
    
var mobileFormat = /^[0]?[789]\d{9}$/
var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const { data, fullName, userName, password } = user

const onChange = (e) => { 
    setUserData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}  

const onSignup = (e) => {
    e.preventDefault()    
    var messege = () =>{
        if (user.data === "" && user.fullName === "" && user.password === "" && user.userName === "") {
            return "Textbox is Empty"
        }
        else if (!data.match(mobileFormat) && !data.match(mailformat)) {
            return "Incorrect Format of Mobile or Email"
        }
    } 
    if(data.match(mobileFormat)) {
        user.type="mobileno"
    }
    else if (data.match(mailformat)) {
        user.type="email"
    }
    console.log(user)
}   
return (
<div className="Register">
    <form onSubmit={onSignup}>
        <center>
        <h1>Register</h1>
        <input type="text" placeholder="Mobile Number or Email" name="data" value={data} onChange={onChange} style={{padding:5,width:200}}/>
        <br />
        <br />
        <input type="text" placeholder="Full Name" onChange={onChange} name="fullName" value={fullName} style={{ padding: 5, width: 200 }} />
        <br />
        <br />
        <input type="text" placeholder="Username" onChange={onChange} name="userName" value={userName} style={{ padding: 5, width: 200 }} />
        <br />
        <br />
        <input type="text" placeholder="Password" onChange={onChange} name="password" value={password} style={{ padding: 5, width: 200 }} />
        <br />
        <br />
        <button type="submit" style={{ padding: 5, width: 200 }}>Sign Up</button>    
        </center>
    </form> 
</div>
)
}

export default Register;