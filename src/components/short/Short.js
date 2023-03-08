import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Short.css"
import axios from '../../axios'

const Short = () => {
    const [remove, setRemove] = useState(null);
    const [geturl , setGeturl] = useState([])
    
    const getShorturl = async()=>{
      try {
        const res =await  axios.get("/url/data")
         setGeturl(res.data)
      } catch (error) {
        console.log(error);
      }    
    }

const getremove = async(id)  =>{
        const res =  await axios.get(`/url/delete/${id}`)
         setRemove(res.data)
         
        }


useEffect(()=>{
    getShorturl();
setRemove("")

},[remove])

  return (

    <div className='short'>
        <h1>Short URL</h1>
        {
            geturl.map((data,index)=>{
                return(
                    <div className='short__detall' key={index}>
                        <div className='short__link'>
                        Short URL : <a href={data.longurl} target="_blank" >http://localhost:3000/{data.shorturl}</a>
                        <p>Long URL : {data.longurl} </p>
                        </div>
                        <div className='short__remove'>
                        <button onClick={()=>getremove(data._id)}>Remove</button>
                        </div>
                     
                    </div>
                    
                )
            })

           
        }
         
         <Link to="/" className='short__back'>Back</Link>
    </div>
  )
}

export default Short