import {Routes, Route} from "react-router-dom"
import Final from "./final page/final"
import Home from "./Home/home"
import Login from "./Login/login"
import Signup from "./Signup/signup"
import Welcome from "./welcomepage/welcome"
import Welcome2 from "./welcomepage/welcome2"


function Allroutes(){

    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/welcome" element={<Welcome/>}></Route>
            <Route path="/welcome2" element={<Welcome2/>}></Route>
            <Route path="/final" element={<Final/>}></Route>
        </Routes>
    )
}

export default Allroutes;