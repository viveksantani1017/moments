import React from "react";
import { useState } from "react";
function Login() {   
const [user, setUserCredential] = useState({
    data: "",
    password:""
})

const {data,password}=user    
    
const onChange = (e) => { 
    setUserCredential((prevState)=>({
            ...prevState,
            [e.target.name]:e.target.value,
    }))
}    
    
const onLogin = (e) => { 
    e.preventDefault() 
    console.log(user)
}
return(
    <div className="Login">
        <form onSubmit={onLogin}>
            <center>
            <h1>Login</h1>
            <input type="text" name="data" value={data} placeholder="Phone number,username,email" onChange={onChange} style={{padding:5,width:200}}/>
            <br />
            <br />
            Heelo From Vaibhav
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