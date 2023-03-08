import React, { useEffect, useState } from 'react'
import "./Reset.css"
import axios from '../../axios';
import {useParams,useNavigate} from "react-router-dom"

const Reset = () => {
  const {email} = useParams()
  const [gmail,setGmail] = useState("")
  const [password , setPassword] = useState("");
  const navigate = useNavigate();

  const resetpassword = async(e) =>{
    e.preventDefault();
    const res = await axios.put(`/user/update/${email}`,{
      gmail,
      password,
    })
    alert(res.data);
    navigate("/login")
    
  }
  return (
    <div className='reset'>
      <h1>Short URL</h1>
      <div className='reset__container'>
      <h1>Re-Enter Password</h1>
      <form>
        <h5>Re-Enter Email</h5>
        <input type="email" 
         value={gmail}
         onChange={(e)=>setGmail(e.target.value)}
         placeholder="Enter your Email"
         />
        <h5>password :</h5>
        <input type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Enter your reset password"
        />
        <button className='reset__btn' onClick={resetpassword}>Set Password</button>
      </form>
      </div>
    </div>
  )
}

export default Reset
