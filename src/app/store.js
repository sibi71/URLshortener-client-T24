import { configureStore } from "@reduxjs/toolkit"
import  userReducer from "../slices/UserSlices"




const store = configureStore({
    reducer:{
        userInfo:userReducer,
        
    }
})



export default store