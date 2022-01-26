import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./register.css"
export default function Register(){
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);
    const handleSubmit= async (e)=>{
        e.preventDefault();
        setError(false);
        try{
          
        const res= await axios.post("/auth/register",{
           username,
           email,
           password
        });
        res.data && window.location.replace("/login");
    }catch(err){
        setError(err);
    }
    };

    return(
        <div className="register">
            <span className="registerTitle">Register</span>
            <form  className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
               <input type="text" className="registerInput" placeholder="Enter your username..." 
               onChange={e=>setUsername(e.target.value)} />
                <label>Email</label>
               <input type="email" className="registerInput" placeholder="Enter your email..."
                 onChange={e=>setEmail(e.target.value)} />
               <label>Password</label>
               <input type="password" className="registerInput" placeholder="Enter your password..."
                onChange={e=>setPassword(e.target.value)} />

                <button className="registerButton" type="submit">Register</button>
            </form>
        <button className="registerLoginButton">
            <Link to="/login" className="link">Login</Link>
        </button>
{ error && <span style={{color:"red",marginTop:"10px"}}>Something went wrong!</span>}
        </div>
    )
}