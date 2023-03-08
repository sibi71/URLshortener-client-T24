import React, { useState } from 'react'
import "./FWD.css"
import axios from '../../axios';
const FWD = () => {
  const [email,setEmail] = useState("")

  const sendEmail =async(e)=>{
    e.preventDefault();
    const res = await axios.post("/user/fwd",{
      email,
    })
    alert(res.data.msg);

  }
  return (
    <div className='fwd'>
      <h1>Short URL</h1>
      <form>
        <h1>Reset Password</h1>
      <h5>E-mail :</h5>
        <input type="email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="Enter your Email"
        />
         <button className='fwd__btn' onClick={sendEmail}>send</button>
      </form>
    </div>
  )
}

export default FWD