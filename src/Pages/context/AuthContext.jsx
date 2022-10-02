
import React from "react";
import { createContext, useState } from "react";


export const AuthContext=createContext();


const AuthContextProvider = ({children}) => {

  let [loginuser, setloginuser]= useState("")
    
  
  
  
  
    return <AuthContext.Provider value={{loginuser, setloginuser}}>{children}</AuthContext.Provider>;
  };
  
  export default AuthContextProvider;