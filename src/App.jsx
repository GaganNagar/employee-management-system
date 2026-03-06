import React, { useContext, useState, useEffect}  from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const authData = useContext(AuthContext)
const [loggedInUserData, setloggedInUserData] = useState(null)


useEffect(() => {

    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser({ role: userData.role })
      setloggedInUserData(userData.data)
      // console.log(userData)
    }
}, [])


  const handleLogin = (email, password) => {

  if(!authData) return

  const admin = authData.admin.find(
    (e) => email === e.email && password === e.password
  )

  if(admin){
    setUser({role:'admin'})
    setloggedInUserData(admin)
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin', data:admin}))
    return
  }

  const employee = authData.employees.find(
    (e) => email === e.email && password === e.password
  )

  if(employee){
    setUser({role:'employee'})
    setloggedInUserData(employee)
    localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
    return
  }

  alert('Invalid credentials')
}

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user?.role === 'admin' && <AdminDashboard />}

      {user?.role === 'employee' && <EmployeDashboard data={loggedInUserData} />}
    </>
  )
}

export default App
