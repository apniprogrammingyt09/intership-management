import './App.css';
import {useState} from "react"
import Login from './component/Login';
import ResponsiveAppBar from './component/Navbar';
import HomeElement from "./component/Home.js"
import LoginElement from './component/Login.js';
import {
 
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './component/Home';
import Dashboard from './component/Dashboard';
import Alert from "./component/Alert"
import Mission_control  from './component/Mission_control';

function App() {



  return (
   <>


   <ResponsiveAppBar  />


   <Routes >

<Route  path='/'  element={<HomeElement />}  />
<Route  path='/login'  element={<LoginElement />}  />
<Route  path='/Dashboard'  element={<Dashboard/>}  />
<Route  path='/Alert'  element={<Alert/>}  />
<Route  path='/Mission_Control'  element={<Mission_control/>}  />
  
</Routes>
   </>
  );
}

export default App;
