import React from "react";
import { useAddUserDataMutation } from '../api/userSlice'
import { useState } from "react";
function Register() {

const [user, setUserData] = useState({
    info: "",
    fullName: "",
    userName: "",
    password: "",
    type:""
})

const { info, fullName, userName, password } = user
var mobileFormat = /^[0]?[789]\d{9}$/
var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
var usernameformat= "^[A-Za-z][A-Za-z0-9_]{7,29}$";
const [addUserData]=useAddUserDataMutation()

const onChange = (e) => { 
    setUserData((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }))
}  

const onSignup = (e) => {
    e.preventDefault()    
    if (user.info === "" && user.fullName === "" && user.password === "" && user.userName === "") {
        console.log("Textbox is Empty")
    }
    else if (!info.match(mobileFormat) && !info.match(mailformat)) {
        console.log("Incorrect Format of Mobile or Email")
    }
    else if(!userName.match(usernameformat)){
        console.log("Incorrect Format of Username")
    }
    else{
        addUserData({user}).unwrap().then((response)=>{
            console.log(response)
        })
    }
    if(info.match(mobileFormat)) {
        user.type="mobileno"
    }
    else if (info.match(mailformat)) {
        user.type="email"
    }
}   
return (
    <div className="Register">
        <form onSubmit={onSignup}>
            <center>
            <h1>Register</h1>
            <input type="text" placeholder="Mobile Number or Email" name="info" value={info} onChange={onChange} style={{padding:5,width:200}}/>
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