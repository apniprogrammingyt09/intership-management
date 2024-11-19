import {createSlice} from "@reduxjs/toolkit"

export const verificationSlice =createSlice({
name :"verify",
initialState :false,
reducers:{
    setAuthenticate:(state,action)=>{
        return state= true
    },
    setAuthenticate_F:(state,action)=>{
        return state= false
    }
}




})


export const {setAuthenticate,setAuthenticate_F}=verificationSlice.actions
export default verificationSlice.reducer
