import React, { useState } from 'react'
import "./Home.css"
import axios from '../../axios'
import { useNavigate } from "react-router-dom"
import Homecard from '../../components/homeCard/Homecard'
const Home = () => {
  const [longUrl , setLongUrl] = useState("")

  const navigate = useNavigate()

  const shorturl = async(e)=>{
    e.preventDefault(); 
    try {
       await axios.post("/url/create",
      {
        longUrl,
      });
      navigate("/view")
     

    } catch (error) {
      console.log(error);
      
    }

  }

  return (
    <div className='home'>
      <h2>Short URL</h2>
      <form>
        <h5>Paste the URL to be shortened</h5>
        <div className='home__input'>
            <input type="test" placeholder='Enter link here' value={longUrl} onChange={(e)=>setLongUrl(e.target.value)} />
          <button onClick={shorturl}>ShortUrl</button>
       </div>
       <p className='home__info'>ShortURL is a free service to shorten URLs and create short links
        Create a premium account to shorten unlimited URLs with more features for your projects</p>
      </form>
      <div>
      <Homecard />
      </div>
     
    </div>
  )
}

export default Home