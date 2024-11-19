import React from 'react'
import Axios from "axios"
import { useState } from 'react'
import {useNavigate} from "react-router-dom"



const Login = () => {
const [username,setusername] =useState() 
const [password,setpassword]= useState()
const navigate = useNavigate()


  const submit = async()=>{
      try{
        const response = await Axios.post("http://localhost:2000/",{username,password})
        console.log(response)
        if(response.login=true){
           localStorage.setItem("tokken",response.data.token)
           localStorage.setItem("user_id",response.data.id)
           navigate("/")
        }


      }
      catch(error){
 return console.log("thepost req not working properly")
      }



  }
  
  
  return (
<>

<input type="text" value={username}  placeholder='enter your username' onChange={(e)=>setusername(e.target.value)} />
<input type="password" value={password} placeholder='enter your password' onChange={(e)=>setpassword(e.target.value)} />
<button onClick={submit} >submit it!</button>

</>

    )
}

export default Login