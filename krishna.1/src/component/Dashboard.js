import React from 'react'
import {useDispatch,useSelector} from "react-redux"
import { setAuthenticate, setAuthenticate_F } from '../State/Reducer/index';
import { useEffect } from 'react'
import axios from 'axios'
import Notfound from './Notfound';

const Dashboard = () => {
  const token = localStorage.getItem("tokken")
  useEffect(()=>{
    if (token) {
        const verifyToken = async () => {
          try {
            const response = await axios.post('http://localhost:2000/verify', { token }); 
            // setIsAuthenticated(response.data.valid);
            dispatch(setAuthenticate())
          
            console.log(response)
            console.log(response.data.valid)

            
          } 
          catch (error) {

            console.error('Token verification failed:', error);
            // Handle token invalidation, e.g., redirect to login
            
          }
        };


verifyToken()   
} 
if(!token){
    dispatch(setAuthenticate_F())

  }
  


},[])

const dispatch = useDispatch()


  

const curstate = useSelector((state)=>state.verifys)


  return (


    curstate ? (
      <>
      <h1>Dashboard hai ye </h1>
      
      
      </>
      
        ) :(<Notfound />)
      
  )
}

export default Dashboard