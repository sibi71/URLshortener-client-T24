import React, { useState } from 'react'
import "./Login.css"
import { Link,useNavigate } from "react-router-dom";
import axios from "../../axios"
import { useDispatch } from "react-redux"
import { handleLogin } from '../../slices/UserSlices';
import { BiArrowBack } from "react-icons/bi"
const Login = () => {
  
  const [email,setEmail] = useState("");
  const [password ,setPassword] = useState("");

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const login = async(e)=>{
    e.preventDefault();
    const res = await axios.post("/user/login", 
    {
      email,
      password,
    });

    localStorage.setItem("token",res.data.token) 
    res.data.token != undefined ?   navigate("/") : alert("Sorry wrong password");
      dispatch(handleLogin(res.data.token));
     
  }

  return (
  <div className='login'>
    <h1>Short URL</h1>
    <div className='login__container'>
      <h1>Login Account</h1>

      <form>
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
        <button className='login__Button' onClick={login}>Login</button>
      </form>
      <Link to="/fwd" className='login__fwd'>Forgot Password ?</Link>
      <Link to="/signup" className='login__back'><BiArrowBack/></Link>
       
      </div>
  </div>
  )
}

export default Login