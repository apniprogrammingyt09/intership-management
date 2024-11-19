import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Notfound from './Notfound'
import { json, useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { setAuthenticate, setAuthenticate_F } from '../State/Reducer/index';
import "../Css/home.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import "aos/dist/aos.css"

const Home = () => {

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

   
const [studentID, setStudentID] = useState('');
const [internalMentorID, setInternalMentorID] = useState('');
const [externalMentorEmail, setExternalMentorEmail] = useState('');
const [externalCompanyName, setExternalCompanyName] = useState('');
const [companyRegistrationNumber, setCompanyRegistrationNumber] = useState('');
const [companyAddress, setCompanyAddress] = useState('');
const  [city, setCity] = useState('');
const [startDate, setStartDate] = useState('');
const [stipendAmount, setStipendAmount] = useState('');
const [offerLetterURL, setOfferLetterURL] = useState('');
   


async function send_Data(){
  console.log(
    studentID,
    internalMentorID,
    externalMentorEmail,
    externalCompanyName,
    companyRegistrationNumber,
    companyAddress,
    city,
    startDate,
    stipendAmount,
    offerLetterURL
  );
  try{
    const response = await axios.post("http://localhost:2000/all_values", {
      studentID,
      internalMentorID,
      externalMentorEmail,
      externalCompanyName,
      companyRegistrationNumber,
      companyAddress,
      city,
      startDate,
      stipendAmount,
      offerLetterURL
     }) 
     console.log(response)
    

  }
  catch{
    console.log("the bolck of code is not running")
  }
 

}

    return (


  <>
 {/* {
    curstate ? (<h1 > THIS IS YOUR HOME PAGE</h1>):
     (<Notfound />)
 } */}
  
  {/* <div className="card">

<h1>NAME : PANNER SABJI </h1>
<h1>PRICE : 3000  </h1>

<div className="card_innerbox">
<button>+</button>
<h1>count</h1>
<button>-</button>

</div>

  </div> */}
{
  curstate ? (
<>
<h1>hello world </h1>
<section className="mainform">


<div className="form_box">


<h1>this are the three option of the user what kind of user are you</h1>
<div className="box_1_option">
<TextField
        id="outlined-studentID"
        label="Student ID"
        variant="outlined"
        value={studentID}
        placeholder="Enter your student ID"
        onChange={(e) => setStudentID(e.target.value)}
        fullWidth
      />
      <TextField
        id="outlined-internalMentorID"
        label="Internal Mentor ID"
        variant="outlined"
        value={internalMentorID}
        placeholder="Enter internal mentor ID"
        onChange={(e) => setInternalMentorID(e.target.value)}
        fullWidth
      />


</div>
    
      <TextField
        id="outlined-externalMentorEmail"
        label="External Mentor Email"
        variant="outlined"
        value={externalMentorEmail}
        placeholder="Enter external mentor email"
        onChange={(e) => setExternalMentorEmail(e.target.value)}
        type="email"
        fullWidth
      />
      <TextField
        id="outlined-externalCompanyName"
        label="External Company Name"
        variant="outlined"
        value={externalCompanyName}
        placeholder="Enter external company name"
        onChange={(e) => setExternalCompanyName(e.target.value)}
        fullWidth
      />
      <TextField
        id="outlined-companyRegistrationNumber"
        label="Company Registration Number"
        variant="outlined"
        value={companyRegistrationNumber}
        placeholder="Enter company registration number"
        onChange={(e) => setCompanyRegistrationNumber(e.target.value)}
        fullWidth
      />
      <TextField
        id="outlined-companyAddress"
        label="Company Address"
        variant="outlined"
        value={companyAddress}
        placeholder="Enter company address"
        onChange={(e) => setCompanyAddress(e.target.value)}
        multiline
        rows={2} // Adjust rows as needed for address length
        fullWidth
      />
      <TextField
        id="outlined-city"
        label="City"
        variant="outlined"
        value={city}
        placeholder="Enter city"
        onChange={(e) => setCity(e.target.value)}
        fullWidth
      />
      <TextField
        id="outlined-startDate"
        label="Start Date"
        variant="outlined"
        value={startDate}
        placeholder="Enter start date"
        onChange={(e) => setStartDate(e.target.value)}
        type="date"
        fullWidth
        InputLabelProps={{ shrink: true }} // Improved UX - label shrinks on focus
      />
      <TextField
        id="outlined-stipendAmount"
        label="Stipend Amount"
        variant="outlined"
        value={stipendAmount}
        placeholder="Enter stipend amount"
        onChange={(e) => setStipendAmount(e.target.value)}
        type="number"
        fullWidth
      />
      <TextField
        id="outlined-offerLetterURL"
        label="Offer Letter URL"
        variant="outlined"
        value={offerLetterURL}
        placeholder="Enter offer letter URL"
        onChange={(e) => setOfferLetterURL(e.value)}
        type="url"
        fullWidth
      />
          <Button variant="contained" onClick={send_Data}>SUBMIT </Button>

</div>




</section>




</>

  ) :(<Notfound />)
}


  </>
  )
}



export default Home