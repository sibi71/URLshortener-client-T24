import React,{useEffect} from 'react'
import "./Header.css"
import { Link,useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux" 
import {  getUser, handleLogin, logout } from "../../slices/UserSlices"
const Header = () => {
    const user = useSelector(getUser);
    const dispatch = useDispatch();
    const navigate = useNavigate()
 useEffect(()=>{
        let token = localStorage.getItem("token");
        if(token && !user){
          dispatch(handleLogin(token))
        }
  
      },[])

 const login =()=>{
        if(user){
          dispatch(logout())
           
        }
        else{
          navigate("/login")
        }
      }

  return (
    <div className='header'>
        <div className='header__logo'>
            <h1>Short URL</h1>
        </div>
        <div className='header__nav'>
           <Link to ={!user && "/login"} className="header__link">
           <div className='header__option' onClick={login}>
            <span className='header__optionLineOne'>
              {user ? user?.name:"Hello"}
            </span>
            <span className='header__optionLineTwo'>{user?"sign Out":"sign In"}</span>
          </div>
        </Link>
        

        </div>
    </div>
  )
}

export default Header