import React, { useContext, useState, useEffect}  from 'react'
import Login from './components/Auth/Login'
import EmployeDashboard from './components/Dashboard/EmployeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'


const App = () => {

  const [user, setUser] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
const [loggedInUserData, setloggedInUserData] = useState(null)


useEffect(() => {

    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser({ role: userData.role })
      setloggedInUserData(userData.data)
    }
}, [])

  const handleLogin = (email, password) => {

  if(!userData) return

 const admin = userData?.admin?.find(
    (e) => email === e.email && password === e.password
  )

  if(admin){
    setUser({role:'admin'})
    setloggedInUserData(admin)
    localStorage.setItem('loggedInUser', JSON.stringify({role:'admin', data:admin}))
    return
  }

  const employee = userData?.employees?.find(
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

      {user?.role === 'admin' && <AdminDashboard changeUser={setUser} />}

      {user?.role === 'employee' && <EmployeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  )
}
 
export default App
