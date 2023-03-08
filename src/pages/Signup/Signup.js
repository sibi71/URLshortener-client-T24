import axios from '../../axios';
import React, { useState } from 'react'
import "./Signup.css"
import { Link } from "react-router-dom"
const Signup = () => {
  const [name , setName] = useState(" ");
  const [email,setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const signup = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post("/user/signup",{
        name,
        email,
        password,
      })
      alert(res.data?.msg);
    } catch (error) {
      console.log(error);
      
    }

  }
  return (
    <div className='signup'>
      <h1>Short URL</h1>

      <div className='signup__container'>
        <h1>Create Short Url Account</h1>
        <form>
          <h5>Name :</h5>
          <input type="text" 
          value ={name} 
          onChange={(e)=>setName(e.target.value)}
          placeholder="Enter your Name"
          />
          <h5>E-mail :</h5>
          <input type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter your Email"
          />
          <h5>password :</h5>
          <input type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Enter your password"
          />
        </form>
        <button className='signup__Button' onClick={signup}>Create Your Short URL Account</button>
        <hr></hr>
          <Link to="/login" className='signup__loginbtn'>Login</Link>
        </div>
    </div>
  )
}

export default Signup