import React, { createContext, useEffect, useState} from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localstorage'
import { Form } from 'react-router-dom'


export const AuthContext = createContext()

const AuthProvider = ({children}) => {

// localStorage.clear()
  const [userData, setUserData] = useState({ employees: [], admin: [] })
 
useEffect(() => {
    if(!localStorage.getItem("employees") || !localStorage.getItem("admin")){
    setLocalStorage()
  }

  const {employees, admin} = getLocalStorage()
setUserData({employees, admin})
}, [])

  return (
    <div>
      <AuthContext.Provider value={[userData, setUserData]} >

      {children}

      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
