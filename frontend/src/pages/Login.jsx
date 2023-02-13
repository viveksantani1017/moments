import React from "react";
import { useState } from "react";
import {useAuthoriseUserDataMutation} from "../api/userSlice"
function Login() {   

const [user, setUserCredential] = useState({
    data: "",
    password:"",
    type:""
})
const {data,password}=user    
var mobileFormat = /^[0]?[789]\d{9}$/
var mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
var usernameformat= "^[A-Za-z][A-Za-z0-9_]{7,29}$";

const [authoriseUserData]=useAuthoriseUserDataMutation()

const onChange = (e) => { 
    setUserCredential((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
    }))
}    
    
const onLogin = (e) => { 
    e.preventDefault()    
    if (user.data === "" && user.password === "") {
        console.log("Textbox is Empty")
    }
    else{
        authoriseUserData(user).unwrap().then((response)=>{
            console.log(response)
        })
    }
    if(data.match(mobileFormat)) {
        user.type="mobileno"
    }
    else if (data.match(mailformat)) {
        user.type="email"
    }
    else if(usernameformat){
        user.type="username"
    }
}
return(
    <div className="Login">
        <form onSubmit={onLogin}>
            <center>
            <h1>Login</h1>
            <input type="text" name="data" value={data} placeholder="Phone number,username,email" onChange={onChange} style={{padding:5,width:200}}/>
            <br />
            <br />
            <input type="password" name="password" value={password} placeholder="Password" onChange={onChange} style={{ padding: 5, width: 200 }} />
            <br />
            <br />
            <button type="submit" style={{ padding: 5, width: 200 }}>Login</button>    
            </center>
        </form> 
    </div>
)
}

export default Login;