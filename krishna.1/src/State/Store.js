import { configureStore } from "@reduxjs/toolkit";

import verificationSlice  from "./Reducer/index";
export default configureStore ({
  reducer:{
    verifys : verificationSlice,
  

  }  
})