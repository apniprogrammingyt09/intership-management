// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');

// const app = express();


// // Connect to MySQL
// const pool = mysql.createPool({
//   host: 'root',
//   user: 'your-mysql-user',
//   password: '',
//   database: 'vegetable_quantities'   

// });

// // Parse JSON data
// app.use(bodyParser.json());

// // Define a route to fetch data from the database
// app.get('/', (req, res) => {
//  res.json("hello world")
// });

// app.listen(3000, () => {
//   console.log(`Server listening on port `);
// });

const express = require("express")
const  jwt = require("jsonwebtoken")
const mysql = require("mysql")
const impkey= "code_with_krishna"


const cors =require("cors")
const { response } = require("express")




const app = express()

app.use(cors())
app.use(express.json());



const db = mysql.createConnection(
    {
     host:   "localhost",
     user: "root",
     password:"",
     database:"void_hack"
    }
)



app.listen(2000,()=>{
    console.log("the server is running at 2000 ....")
})


app.post('/',(req,res)=>{
    try{



     const {username, password}= req.body
const sql = "select * from users where name=? and phone_number=? "
db.query(sql,[username,password ],(error,result )=>{
if(error){
    return response.status(500).json("somthing went wrong....")
}
if(result.length >0){
    const id= result[0].user_id;
   const token = jwt.sign({id},impkey)
    return res.status(200).json({login:true,id,token,result})
    }
  
return res.status(401).json ("login faild .... either username or password are incorrect")

    
})

    }
    catch(error){
        return req.json("your sql query is incorrect ...")

    }
})

app.post("/verify",(req,res)=>{
const {token} =req.body

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Missing token' });
      }
     try{

        if(token){
            const decoded = jwt.verify(token, impkey); 
            res.status(200).json({ valid: true, data: decoded }); 
        }
     } catch (error) {
        if (error.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Unauthorized: Token expired' });
        } else if (error.name === 'JsonWebTokenError') {
          return res.status(401).json({ valid:false,message: 'Unauthorized: Invalid token' });
        } else {
          console.error('Error verifying token:', error);
          return res.status(500).json({ valid :false,message: 'Internal server error' });
        }
      }
    



})

app.post("/all_values",(req,res)=>{
    try{
const { studentID,
    internalMentorID,
    externalMentorEmail,
    externalCompanyName,
    companyRegistrationNumber,
    companyAddress,
    city,
    startDate,
    stipendAmount,
    offerLetterURL} = req.body

    const sql = "insert into internships (student_id,external_mentor_email,external_company_name,  company_registration_number,company_address, city, start_date, stipend_amount,offer_letter_url) values (?,?,?,?,?,?,?,?,?)"
db.query(sql ,[studentID,
    
    externalMentorEmail,
    externalCompanyName,
    companyRegistrationNumber,
    companyAddress,
    city,
    startDate,
    stipendAmount,
    offerLetterURL],(err,result)=>{

        if(err){
            return res.status(401).json({message:"error occure //you are not in the main table basically your id"})
        }
        
        return res.status(200).json("the values are succesfully inserted ..")
        

    })
    
    }
    catch{
return res.json("error is ocuur query is not running")
    }
})



app.post("/insert_all_value",(req,res)=>{
 try{
const {myarray}= req.body
const checkingid= "select * from foods  where user_id=?"
db.query(checkingid,[5],(err,data)=>{
    if (err) {
        return res.status(500).json({ message: "Error checking for existing user ID" });
      }

   
   if (data.length > 0){
    const updateQuery = "UPDATE foods SET tags=? WHERE user_id =?";
    db.query(updateQuery, [ myarray,"5"], (err) => {


        if (err) {
            return res.status(500).json({ message: "Error updating food tags" });
          }

          return res.status(200).json("Food tags successfully updated for user ID 5");

    })

    return res.json("hello world")
   }
   else{


    const sql = "insert into foods (user_id,tags) values (?,?)"
db.query(sql, ["5",myarray],(err,data)=>{

if(err){
    return res.status(401).json({message:"error occure //you are not in the main table basically your id"})
}

return res.status(200).json("the values are succesfully inserted ..")


})


   }
   
   


 

})



 }
 catch(error){
 return res.status(500).json("the query is not working")
 }

})


app.post("/insert_all_value", ( req, res)=>{
 try {

 }
 catch{

 }
})



// app.post("/insert_all_value",(req,res)=>{
//     try{
// const {updatedArray}=req.body
// const sql = "insert into fooditems () values"

//     }
//     catch(error){

//     }
// })
// app.post("/sign_up",(req,res)=>{
// try{
//  const {firstname, lastname , email , password_signin }  =req.body

//     const checkUserSql = "SELECT email FROM student WHERE email = ?";
//     db.query(checkUserSql ,[email],(error ,result)=>{

//         if(result.length >0){
//             return res.status(409).json("you are allready have an account..")
//         }


//         const sql = "insert into student (firstname,lastname, email , phone ) values (?,?,?,?)"
//         db.query(sql ,[firstname, lastname , email , password_signin], (error,result)=>{
//         if(error){
//             return res.json ("somthing went wrong")
//         }
        
//         return res.status(200).json("signup successfully occur...")
        
//         })
        

//     })

    
// }
// catch(error){
 
//     return res.json("the query was not running ....")
// }


// })








